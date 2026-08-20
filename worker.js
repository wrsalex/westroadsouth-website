export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API: Verify reCAPTCHA token
    if (url.pathname === '/api/verify-recaptcha' && request.method === 'POST') {
      try {
        const { token } = await request.json();
        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${encodeURIComponent('6Lc7qWwtAAAAAPjxFqTKF-irKbxKWIL2X11Sn6xu')}&response=${encodeURIComponent(token)}`
        });
        const result = await verifyRes.json();
        return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
      } catch (e) {
        return new Response(JSON.stringify({ success: false }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // API: Submit contact form → Telegram
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data = await request.json();
        let tgMsg = '';

        if (data.type === 'booking') {
          // Booking notification (user redirected to Cal.com for time selection)
          const name = (data.name || '—').trim();
          const email = (data.email || '—').trim();
          const company = (data.company || '').trim();
          const service = (data.service || '—').trim();
          const needs = (data.needs || '—').trim();
          const countryCode = (data.countryCode || '').trim();
          const phone = (data.phone || '').trim();

          const serviceLabels = {
            'ai-consulting': 'AI Consulting & Strategy',
            'workflow-optimization': 'Workflow Optimization',
            'designhub': 'DesignHub',
            'researchvault': 'ResearchVault',
            'other': 'Other'
          };
          const serviceLabel = serviceLabels[service] || service;

          tgMsg = [
            '\u{1F5D3} <b>New Booking — ' + esc(serviceLabel) + '</b>',
            '',
            '<b>Name:</b> ' + esc(name),
            '<b>Email:</b> ' + esc(email),
            company ? '<b>Company:</b> ' + esc(company) : '',
            (countryCode && phone) ? '<b>WhatsApp:</b> ' + esc(countryCode) + ' ' + esc(phone) : '',
            '',
            '<b>📅 Scheduling:</b> Redirected to Cal.com for time selection',
            '',
            '<b>Needs:</b>',
            esc(needs),
            '',
            '<i>via westroadsouth.com/book → cal.com/westroadsouth/30min</i>'
          ].filter(Boolean).join('\n');
        } else if (data.type === 'scorecard') {
          // Scorecard submission
          const email = (data.email || '—').trim();
          const totalScore = data.totalScore || 0;
          const tier = (data.tier || '—').trim();
          const answers = data.answers || '{}';
          const answersText = data.answersText || '{}';

          const qLabels = ['Strategy', 'Process Maturity', 'Data Readiness', 'Technology', 'Team & Skills', 'Budget & ROI', 'Timeline'];
          let answerLines = '';
          try {
            const parsed = typeof answers === 'string' ? JSON.parse(answers) : answers;
            const textParsed = typeof answersText === 'string' ? JSON.parse(answersText) : answersText;
            answerLines = Object.entries(parsed).map(([k, v]) => {
              const idx = parseInt(k.replace('q', '')) || 0;
              const label = qLabels[idx] || k;
              const selectedText = textParsed[k] || '';
              return '<b>Q' + (idx + 1) + ' ' + esc(label) + ':</b> ' + v + '/3 — ' + esc(selectedText);
            }).join('\n');
          } catch (e) {
            answerLines = esc(String(answers));
          }

          tgMsg = [
            '\u{1F4CA} <b>New Scorecard Submission</b>',
            '',
            '<b>Email:</b> ' + esc(email),
            '<b>Score:</b> ' + totalScore + '/21 — ' + esc(tier),
            '',
            answerLines,
            '',
            '<i>via westroadsouth.com/scorecard</i>'
          ].filter(Boolean).join('\n');
        } else {
          // Standard contact form
          const name = (data.name || '—').trim();
          const email = (data.email || '—').trim();
          const company = (data.company || '').trim();
          const message = (data.message || '—').trim();

          tgMsg = [
            '\u{1F4EC} <b>New Contact Form</b>',
            '',
            '<b>Name:</b> ' + esc(name),
            '<b>Email:</b> ' + esc(email),
            company ? '<b>Company:</b> ' + esc(company) : '',
            '',
            '<b>Message:</b>',
            esc(message),
            '',
            '<i>via westroadsouth.com</i>'
          ].filter(Boolean).join('\n');
        }

        await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: '36390631', text: tgMsg, parse_mode: 'HTML' })
        });

        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
      } catch (e) {
        return new Response(JSON.stringify({ success: false }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // Static assets: attach security headers
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};

function esc(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
