<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title="AI Agents for Retail & E-Commerce Automation"
  description="AI agents for retail: inventory optimization, dynamic pricing, customer service, and multi-channel order sync. Cut ops costs 30-50%. Hong Kong-based, worldwide deployments."
  ogType="website"
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Industry Solution</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6 speakable-heading">AI Agents for Retail &amp; E-Commerce Automation</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed speakable-summary">Purpose-built AI agents that automate retail operations — from inventory optimization and dynamic pricing to multi-channel order processing. Deployed across Shopify, Amazon, Tmall, and custom storefronts worldwide.</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">What We Automate</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-12 text-center">Retail workflows our AI agents handle</h2>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each [
        {icon: '📦', title: 'Inventory Optimization', desc: 'Real-time stock level monitoring with automated replenishment triggers across all channels. Reduces stockouts by 60%+ and cuts carrying costs through AI demand forecasting.'},
        {icon: '💲', title: 'Dynamic Pricing', desc: 'Competitor-aware pricing that adjusts in real-time based on demand, inventory depth, and market conditions. 22% margin improvement during peak seasons.'},
        {icon: '💬', title: 'Customer Service AI', desc: 'Multilingual (EN/ZH/JA) customer service agents that handle inquiries 24/7. Integrated with your helpdesk and order management. 70%+ resolution without human intervention.'},
        {icon: '📋', title: 'Product Data Extraction', desc: 'Auto-extract SKUs, descriptions, images, and specifications from supplier catalogs, PDFs, and websites. Bulk upload to your storefront in minutes.'},
        {icon: '🔄', title: 'Order Processing Automation', desc: 'End-to-end order workflow: payment verification → inventory allocation → shipping label generation → customer notification. 4 hours → 9 minutes per order.'},
        {icon: '🔗', title: 'Multi-Channel Sync', desc: 'Unified inventory, pricing, and order management across Shopify, Amazon, Tmall, JD.com, and wholesale channels. One source of truth, zero manual reconciliation.'}
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
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-10 text-center">Order processing: 4 hours to 9 minutes</h2>
    </ScrollReveal>
    <div class="bg-wrs-off-white rounded-2xl border border-wrs-border p-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">9 min</div>
          <div class="text-sm text-wrs-gray">Per-order processing</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">64%</div>
          <div class="text-sm text-wrs-gray">Fewer stockouts</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">5 weeks</div>
          <div class="text-sm text-wrs-gray">Time to production</div>
        </div>
      </div>
      <p class="text-wrs-gray leading-relaxed text-center max-w-xl mx-auto">A multi-channel retailer processing 8,000+ orders daily across Shopify, Amazon, and Tmall. Our AI agent now handles the entire order workflow — payment verification, inventory allocation, shipping labels, and customer notifications — reducing per-order processing from 4 hours to 9 minutes.</p>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center">
  <div class="max-w-xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Automate Your Retail Operations</h2>
      <p class="text-gray-400 mb-8">Book a free 15-minute assessment. We'll analyze your retail workflows and identify the highest-ROI automation opportunities.</p>
      <a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover transition-all">Book a Free Assessment →</a>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-8 text-center">Frequently Asked Questions</h2>
    <div class="space-y-3">
      {#each [
        {q: 'Can your AI agents integrate with our existing e-commerce platform?', a: 'Yes. Shopify, Magento, WooCommerce, Amazon Seller Central, Tmall, JD.com, and custom storefronts. We also handle ERP-to-storefront sync (NetSuite, Dynamics 365, Odoo).'},
        {q: 'How does dynamic pricing AI handle seasonal demand shifts?', a: 'Our agents ingest historical sales data, competitor pricing, inventory levels, and seasonal trends to adjust pricing in real-time. A HK-based electronics retailer saw 22% margin improvement during Singles\\u2019 Day after deploying our pricing agent.'},
        {q: 'What is the typical ROI timeline for retail automation agents?', a: 'Most clients see measurable ROI within 60 days. Inventory optimization agents typically pay for themselves in 4-6 weeks through reduced carrying costs and fewer stockouts. Customer service agents cut ticket resolution costs by 40-60% from month one.'}
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
