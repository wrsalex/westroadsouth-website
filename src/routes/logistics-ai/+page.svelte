<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title="AI Agents for Logistics & Supply Chain"
  description="Custom AI agents for logistics: route optimization, warehouse automation, shipment tracking, customs documentation, and supplier communication. 40-60% operational cost reduction. Based in Hong Kong."
  ogType="website"
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Industry Solution</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6 speakable-heading">AI Agents for Logistics &amp; Supply Chain</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed speakable-summary">Purpose-built AI agents that automate logistics operations — from route optimization and warehouse management to supplier communication and customs documentation. Deployed across Hong Kong and Greater China.</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">What We Automate</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-12 text-center">Logistics workflows our AI agents handle</h2>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each [
        {icon: '🚚', title: 'Route Optimization', desc: 'Real-time route planning that adapts to traffic, weather, and delivery windows. Reduces fuel costs by 15-25%.'},
        {icon: '📦', title: 'Warehouse Automation', desc: 'Inventory tracking, pick-and-pack optimization, and automated replenishment triggers. 40% faster order processing.'},
        {icon: '📋', title: 'Customs Documentation', desc: 'Auto-generate and validate customs declarations, certificates of origin, and trade documents. Eliminates manual data entry errors.'},
        {icon: '🔍', title: 'Shipment Tracking', desc: 'Multi-carrier tracking aggregation with proactive delay alerts and customer notifications. Full audit trail.'},
        {icon: '📊', title: 'Supplier Communication', desc: 'Automated RFQs, order confirmations, and delivery updates across email, WhatsApp, and EDI. Multilingual (EN/ZH).'},
        {icon: '💰', title: 'Cost Optimization', desc: 'AI analyzes shipping patterns and recommends consolidation, carrier switches, and contract renegotiation points.'}
      ] as item, i}
        <ScrollReveal delay={i * 100}>
          <div class="bg-white rounded-xl p-6 border border-wrs-border hover:border-wrs-pink/30 transition-all h-full">
            <div class="text-2xl mb-3">{item.icon}</div>
            <h3 class="font-semibold text-wrs-ink mb-2">{item.title}</h3>
            <p class="text-sm text-wrs-gray leading-relaxed">{item.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">Case Study</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-10 text-center">2,200 staff-hours saved per month</h2>
    </ScrollReveal>
    <div class="bg-wrs-off-white rounded-2xl border border-wrs-border p-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">2,200</div>
          <div class="text-sm text-wrs-gray">Staff-hours saved/month</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">85%</div>
          <div class="text-sm text-wrs-gray">Documentation automated</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">6 weeks</div>
          <div class="text-sm text-wrs-gray">Time to production</div>
        </div>
      </div>
      <p class="text-wrs-gray leading-relaxed text-center max-w-xl mx-auto">A Hong Kong-based logistics company with 200+ daily shipments across Greater China. Our AI agent now handles route planning, customs documentation, and supplier updates — freeing their operations team to focus on strategic carrier relationships instead of data entry.</p>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center">
  <div class="max-w-xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Automate Your Logistics Operations</h2>
      <p class="text-gray-400 mb-8">Book a free 15-minute assessment. We'll analyze your logistics workflows and identify the highest-ROI automation opportunities.</p>
      <a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover transition-all">Book a Free Assessment →</a>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-8 text-center">Frequently Asked Questions</h2>
    <div class="space-y-3">
      {#each [
        {q: 'What logistics systems can your AI agents integrate with?', a: 'We integrate with most major logistics platforms including ERP systems (SAP, Oracle), WMS, TMS, customs platforms, carrier APIs (DHL, FedEx, SF Express), and communication tools (email, WhatsApp, WeChat). Our agents connect via API, webhook, EDI, or file-based integration.'},
        {q: 'How long does it take to deploy a logistics AI agent?', a: 'A proof-of-concept for a single workflow (e.g., customs documentation automation) takes 2-3 weeks. A full logistics automation suite covering route planning, warehouse, and supplier communication typically takes 8-12 weeks. We deploy incrementally so you see results at every phase.'},
        {q: 'Do you handle Chinese-language logistics documentation?', a: 'Yes. Our AI agents are natively multilingual — they process and generate documentation in English, Traditional Chinese, and Simplified Chinese. This is essential for cross-border Greater China logistics where customs forms, invoices, and supplier communications switch between languages.'}
      ] as faq, i}
        <details class="group bg-wrs-off-white rounded-xl border border-wrs-border hover:border-wrs-pink/20 transition-all">
          <summary class="px-5 py-4 cursor-pointer list-none flex items-center justify-between gap-3">
            <span class="text-wrs-ink font-semibold text-sm">{faq.q}</span>
            <svg class="w-4 h-4 text-wrs-pink flex-shrink-0 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          </summary>
          <div class="px-5 pb-4 text-wrs-gray text-sm leading-relaxed">{faq.a}</div>
        </details>
      {/each}
    </div>
  </div>
</section>
