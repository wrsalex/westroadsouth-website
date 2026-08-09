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
          // Booking notification
          const name = (data.name || '—').trim();
          const email = (data.email || '—').trim();
          const company = (data.company || '').trim();
          const service = (data.service || '—').trim();
          const date = (data.date || '—').trim();
          const time = (data.time || '—').trim();
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
            '<b>\u{1F4C5} Date & Time:</b> ' + esc(date) + ' at ' + esc(time) + ' HKT',
            '',
            '<b>Needs:</b>',
            esc(needs),
            '',
            '<i>via westroadsouth.com/book</i>'
          ].filter(Boolean).join('\n');
        } else if (data.type === 'scorecard') {
          // Scorecard submission
          const email = (data.email || '—').trim();
          const totalScore = data.totalScore || 0;
          const tier = (data.tier || '—').trim();

          tgMsg = [
            '\u{1F4CA} <b>New Scorecard Submission</b>',
            '',
            '<b>Email:</b> ' + esc(email),
            '<b>Score:</b> ' + totalScore + '/21 — ' + esc(tier),
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

        await fetch('https://api.telegram.org/bot216838030:AAGtTnDOpVIxoDy6gZJh896jUi_ZnkC7fr4/sendMessage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: '36390631', text: tgMsg, parse_mode: 'HTML' })
        });

        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
      } catch (e) {
        return new Response(JSON.stringify({ success: false }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }
    }

    return env.ASSETS.fetch(request);
  }
};

function esc(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
