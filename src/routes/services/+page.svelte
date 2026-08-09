1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title="AI Agent Services — Custom Development & Enterprise Automation"
  description="End-to-end AI agent solutions: custom development, workflow automation, customer service AI, and intelligent infrastructure. From strategy to production — Hong Kong to the world."
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"Service","name":"AI Agent Development \u0026 Enterprise Automation","provider":{"@id":"https://westroadsouth.com/#org"},"description":"End-to-end AI agent solutions: custom development, workflow automation, customer service AI, and intelligent infrastructure.","areaServed":{"@type":"Place","name":"Worldwide"},"serviceType":"AI Agent Services","offers":{"@type":"Offer","price":"18800","priceCurrency":"HKD","description":"Starting from HK$18,800 for SME workflow automation"}}</script>'}
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('servicesPage.title')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6 speakable-heading">{i18n.t('servicesPage.subtitle')}</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed speakable-summary">{i18n.t('servicesPage.desc')}</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto space-y-12 md:space-y-20">
    {#each i18n.t('servicesItems') as svc, i}
      <ScrollReveal delay={i * 100}>
        <div class="group flex flex-col md:grid md:grid-cols-[auto_1fr] gap-4 md:gap-12 items-start">
          {#if svc.img}
            <img src={svc.img} alt={svc.title} class="w-16 h-16 rounded-2xl object-cover group-hover:scale-105 transition-transform mx-auto md:mx-0" />
          {:else}
            <div class="w-16 h-16 rounded-2xl bg-wrs-pink/10 flex items-center justify-center text-2xl group-hover:bg-wrs-pink/20 transition-colors mx-auto md:mx-0">{svc.icon}</div>
          {/if}
          <div>
            <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-2">{svc.title}</h2>
            <p class="text-wrs-pink font-medium text-sm mb-4">{svc.tag}</p>
            <p class="text-wrs-gray leading-relaxed mb-6">{svc.desc}</p>
            <div class="grid sm:grid-cols-2 gap-2">
              {#each svc.features as feat}
                <div class="flex items-center gap-2 text-sm text-wrs-gray">
                  <svg class="w-4 h-4 text-wrs-pink flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                  {feat}
                </div>
              {/each}
            </div>
          </div>
        </div>
      </ScrollReveal>
    {/each}
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-2 text-center">{i18n.t('exploreMore.title')}</h2>
    <p class="text-wrs-gray text-sm text-center mb-10">{i18n.t('exploreMore.sub')}</p>
    <div class="grid sm:grid-cols-3 gap-4">
      <a href="/process" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center"><h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.howWeWork')}</h3><p class="text-xs text-wrs-gray">{i18n.t('exploreMore.processDesc')}</p></a>
      <a href="/case-studies" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center"><h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.caseStudies')}</h3><p class="text-xs text-wrs-gray">{i18n.t('exploreMore.caseDesc')}</p></a>
      <a href="/pricing" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center"><h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.pricing')}</h3><p class="text-xs text-wrs-gray">{i18n.t('exploreMore.pricingDesc')}</p></a>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center">
  <div class="max-w-xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{i18n.t('servicesPage.cta')}</h2>
      <p class="text-gray-400 mb-8">{i18n.t('servicesPage.ctaDesc')}</p>
      <a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover transition-all">{i18n.t('servicesPage.ctaButton')} →</a>
    </ScrollReveal>
  </div>
</section>