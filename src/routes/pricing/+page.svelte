<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title={i18n.t('pricingPage.hero.badge')}
  description="From proof-of-concept sprints to enterprise-scale AI deployments. Transparent pricing with no hidden fees. Choose the plan that matches your automation maturity."
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does the HK$18,800 starting price include?","acceptedAnswer":{"@type":"Answer","text":"The Starter plan covers a 2-week proof-of-concept sprint: one targeted workflow automation with a single AI agent, basic integration with one system, and a deployment-ready package with documentation."}},{"@type":"Question","name":"Do you offer custom enterprise pricing?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Enterprise plan is fully customized with multiple agents, dedicated infrastructure, custom integrations, and SLA guarantees. Most Enterprise projects fall between HK$150,000-500,000 depending on scale."}},{"@type":"Question","name":"What is the typical ROI on AI automation?","acceptedAnswer":{"@type":"Answer","text":"Clients typically see 40-60% reduction in manual processing time within the first quarter. For customer service AI, 70%+ of inquiries are resolved without human intervention."}},{"@type":"Question","name":"Are there ongoing maintenance costs after deployment?","acceptedAnswer":{"@type":"Answer","text":"Growth and Enterprise plans include monitoring and optimization. For standalone projects, maintenance retainers start at HK$8,000/month for monitoring, model updates, and minor adjustments."}},{"@type":"Question","name":"Can I upgrade or downgrade my plan?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. Most clients start with Starter and upgrade to Growth. There are no lock-in contracts \u2014 we earn your business every month."}}]}</script>'}
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('pricingPage.hero.badge')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6">{i18n.t('pricingPage.hero.title')}</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">{i18n.t('pricingPage.hero.desc')}</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <div class="grid md:grid-cols-3 gap-8">
      {#each i18n.t('pricingPage.tiers') as tier, i}
        <ScrollReveal delay={i * 150}>
          <div class="relative rounded-2xl p-8 h-full flex flex-col {i === 1 ? 'bg-wrs-pink text-white ring-4 ring-wrs-pink/20 scale-[1.02]' : 'bg-white border border-wrs-border'}">
            {#if i === 1}
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-wrs-pink text-xs font-bold rounded-full border border-wrs-pink/20">{i18n.t('pricingPage.popular')}</div>
            {/if}
            <div class="text-3xl mb-4">{['🚀','⚡','🏢'][i]}</div>
            <h3 class="text-xl font-bold mb-1 {i === 1 ? 'text-white' : 'text-wrs-ink'}">{tier.name}</h3>
            <div class="text-3xl font-bold mb-2 {i === 1 ? 'text-white' : 'text-wrs-ink'}">{tier.price}</div>
            <p class="text-sm mb-6 {i === 1 ? 'text-white/70' : 'text-wrs-gray'}">{tier.desc}</p>
            <div class="space-y-3 mb-8 flex-1">
              {#each tier.features as feat}
                <div class="flex items-start gap-2 text-sm {i === 1 ? 'text-white/80' : 'text-wrs-gray'}">
                  <svg class="w-4 h-4 mt-0.5 flex-shrink-0 {i === 1 ? 'text-white' : 'text-wrs-pink'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                  {feat}
                </div>
              {/each}
            </div>
            <a href="/book" class="block text-center py-3 rounded-lg font-semibold text-sm transition-all {i === 1 ? 'bg-white text-wrs-pink hover:bg-gray-100' : 'bg-wrs-pink text-white hover:bg-wrs-pink-hover'}">{i18n.t('pricingPage.cta')}</a>
          </div>
        </ScrollReveal>
      {/each}
    </div>
    <p class="text-center text-wrs-gray text-sm mt-12">{i18n.t('pricingPage.footnote')}</p>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">FAQ</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-10 text-center">Frequently Asked Questions</h2>
    </ScrollReveal>
    <div class="space-y-4">
      {#each [
        {q: 'What does the HK$18,800 starting price include?', a: 'The Starter plan covers a 2-week proof-of-concept sprint: one targeted workflow automation with a single AI agent, basic integration with one system (API or database), and a deployment-ready package with documentation. It is designed to deliver measurable results fast so you can evaluate AI automation with minimal upfront commitment. Most Starter clients upgrade to Growth within 30 days.'},
        {q: 'Do you offer custom enterprise pricing?', a: 'Yes. The Enterprise plan is fully customized \u2014 multiple agents, dedicated infrastructure, custom integrations, SLA guarantees, and ongoing optimization. Pricing depends on scope: number of workflows, integration complexity, and deployment environment. Book a consultation and we will scope it together. Most Enterprise projects fall between HK$150,000\u2013500,000 depending on scale.'},
        {q: 'What is the typical ROI on AI automation?', a: 'Our clients typically see 40\u201360% reduction in manual processing time within the first quarter. For customer service AI, 70%+ of inquiries are resolved without human intervention. One logistics client saved 2,200 staff-hours per month. The exact ROI depends on your current process volume and complexity. Our free scorecard can estimate your automation potential.'},
        {q: 'Are there ongoing maintenance costs after deployment?', a: 'Growth and Enterprise plans include monitoring and optimization as part of the package. For Starter and standalone projects, we offer maintenance retainers starting at HK$8,000/month for monitoring, model updates, and minor adjustments. Agents are designed to be stable \u2014 most clients require minimal ongoing intervention after the initial optimization phase.'},
        {q: 'Can I upgrade or downgrade my plan?', a: 'Absolutely. Most clients start with Starter (proof-of-concept) and upgrade to Growth once they see results. Enterprise relationships often begin as Growth engagements that expand in scope. There are no lock-in contracts \u2014 we earn your business every month.'}
      ] as faq, i}
        <ScrollReveal delay={i * 80}>
          <details class="group bg-wrs-off-white rounded-xl border border-wrs-border hover:border-wrs-pink/20 transition-all">
            <summary class="px-6 py-5 cursor-pointer list-none flex items-center justify-between gap-4">
              <span class="text-wrs-ink font-semibold text-sm md:text-base">{faq.q}</span>
              <svg class="w-5 h-5 text-wrs-pink flex-shrink-0 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
            </summary>
            <div class="px-6 pb-5 text-wrs-gray text-sm leading-relaxed">{faq.a}</div>
          </details>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>
