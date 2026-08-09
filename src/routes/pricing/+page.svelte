<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title={i18n.t('pricingPage.hero.badge')}
  description="From proof-of-concept sprints to enterprise-scale AI deployments. Transparent pricing with no hidden fees. Choose the plan that matches your automation maturity."
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