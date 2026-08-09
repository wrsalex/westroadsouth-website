<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
  let images = ['/images/case-logistics.png','/images/case-compliance.png','/images/case-customer-service.png','/images/case-retail-auto.png'];
</script>

<SEO
  title={i18n.t('casePage.hero.badge')}
  description="Production AI agents that delivered measurable ROI: logistics automation, compliance monitoring, customer service AI, and retail workflow optimization. Metrics included."
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('casePage.hero.badge')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6">{i18n.t('casePage.hero.title')}</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">{i18n.t('casePage.hero.desc')}</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto space-y-10 md:space-y-20">
    {#each i18n.t('casePage.items') as cs, i}
      <ScrollReveal delay={i * 150}>
        <div class="bg-white rounded-2xl border border-wrs-border overflow-hidden hover:border-wrs-pink/30 transition-all duration-300">
          {#if images[i]}
            <div class="h-40 overflow-hidden bg-wrs-ink rounded-t-2xl">
              <img src={images[i]} alt={cs.title} class="w-full h-full object-cover" />
            </div>
          {/if}
          <div class="p-5 md:p-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xs font-semibold text-wrs-pink uppercase tracking-widest">{cs.industry}</span>
            </div>
            <h2 class="text-lg md:text-2xl font-bold text-wrs-ink mb-6">{cs.title}</h2>
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <p class="text-xs font-semibold text-wrs-gray-light uppercase tracking-wider mb-2">{i18n.t('casePage.problem')}</p>
                <p class="text-wrs-gray text-sm leading-relaxed">{cs.problem}</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-wrs-gray-light uppercase tracking-wider mb-2">{i18n.t('casePage.solution')}</p>
                <p class="text-wrs-gray text-sm leading-relaxed">{cs.solution}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3 p-4 md:p-6 bg-wrs-off-white rounded-xl">
              {#each (cs.metrics as any[]) as r}
                <div class="text-center">
                  <div class="text-lg md:text-2xl font-bold text-wrs-pink">{r.v}</div>
                  <div class="text-xs text-wrs-gray-light mt-1">{r.l}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </ScrollReveal>
    {/each}
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink relative overflow-hidden">
  <div class="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="dcs2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#E42869"/></pattern></defs><rect width="100%" height="100%" fill="url(#dcs2)"/></svg></div>
  <div class="max-w-2xl mx-auto text-center relative z-10">
    <ScrollReveal>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{i18n.t('casePage.cta.title')}</h2>
      <p class="text-lg text-gray-300 mb-10">{i18n.t('casePage.cta.desc')}</p>
      <a href="/book" class="group inline-flex items-center gap-2 px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all text-lg">{i18n.t('casePage.cta.button')} <span class="group-hover:translate-x-1 transition-transform">→</span></a>
    </ScrollReveal>
  </div>
</section>