1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title={i18n.t('smeAutomation.hero.badge')}
  description="Purpose-built AI automation for Hong Kong SMEs: data extraction, price monitoring, approval workflows, system integration. Free 15-minute assessment included."
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('smeAutomation.hero.badge')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6 leading-tight">
        {i18n.t('smeAutomation.hero.line1')}<br/>
        <span class="text-wrs-pink">{i18n.t('smeAutomation.hero.line2')}</span>
      </h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed mb-10">{i18n.t('smeAutomation.hero.desc')}</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/book" class="px-8 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all text-lg">{i18n.t('smeAutomation.hero.cta1')}</a>
        <span class="px-8 py-4 border-2 border-wrs-pink/20 text-wrs-ink font-semibold rounded text-lg">{i18n.t('smeAutomation.hero.cta2')}</span>
      </div>
      <p class="text-sm text-wrs-gray mt-6">{i18n.t('smeAutomation.hero.footnote')}</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal><p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">{i18n.t('smeAutomation.pain.title')}</p></ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {#each i18n.t('smeAutomation.pain.items') as pain, i}
        <ScrollReveal delay={i * 100}>
          <div class="bg-white rounded-xl p-6 border border-wrs-border text-center hover:border-wrs-pink/30 transition-all">
            <div class="text-3xl mb-3">{['⌨️','🔁','📊','💬'][i]}</div>
            <h3 class="font-bold text-wrs-ink text-sm mb-1">{pain.title}</h3>
            <p class="text-xs text-wrs-gray">{pain.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">{i18n.t('smeAutomation.automate.title')}</h2>
      <p class="text-wrs-gray text-center mb-12">{i18n.t('smeAutomation.automate.sub')}</p>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each i18n.t('smeAutomation.automate.items') as item, i}
        <ScrollReveal delay={i * 80}>
          <div class="p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 transition-all">
            <div class="text-2xl mb-2">{['📥','📄','📈','📊','✅','🔄','💬','🚨'][i]}</div>
            <h3 class="font-bold text-wrs-ink text-sm mb-1">{item.title}</h3>
            <p class="text-xs text-wrs-gray">{item.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-2 text-center">{i18n.t('smeAutomation.features.title')}</h2>
      <p class="text-wrs-gray text-center mb-12">{i18n.t('smeAutomation.features.sub')}</p>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {#each i18n.t('smeAutomation.features.items') as feat, i}
        <ScrollReveal delay={i * 100}>
          <div class="bg-white rounded-xl p-5 border border-wrs-border text-center hover:border-wrs-pink/30 transition-all">
            <div class="w-8 h-8 rounded-full bg-wrs-pink/10 text-wrs-pink font-bold flex items-center justify-center mx-auto mb-3 text-xs">{i + 1}</div>
            <h3 class="font-bold text-wrs-ink text-sm mb-1">{feat.title}</h3>
            <p class="text-xs text-wrs-gray">{feat.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">{i18n.t('smeAutomation.industries.title')}</h2>
      <p class="text-wrs-gray text-center mb-10">{i18n.t('smeAutomation.industries.sub')}</p>
    </ScrollReveal>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {#each ['🛒','🚚','🏥','💼','🔧','📦','🎧','🗂️'] as icon, i}
        <ScrollReveal delay={i * 80}>
          <div class="flex items-center gap-3 p-4 rounded-xl border border-wrs-border hover:border-wrs-pink/30 transition-all">
            <span class="text-xl">{icon}</span>
            <span class="text-sm font-semibold text-wrs-ink">{i18n.t('smeAutomation.industries.items')[i]}</span>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">{i18n.t('smeAutomation.process.title')}</h2>
      <p class="text-wrs-gray text-center mb-12">{i18n.t('smeAutomation.process.sub')}</p>
    </ScrollReveal>
    <div class="grid sm:grid-cols-4 gap-4">
      {#each i18n.t('smeAutomation.process.items') as p, i}
        <ScrollReveal delay={i * 120}>
          <div class="text-center bg-white rounded-xl p-6 border border-wrs-border">
            <div class="w-10 h-10 rounded-full bg-wrs-pink text-white font-bold flex items-center justify-center mx-auto mb-3">{i + 1}</div>
            <h3 class="font-bold text-wrs-ink text-sm mb-1">{p.title}</h3>
            <p class="text-xs text-wrs-gray">{p.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-3 text-center">{i18n.t('smeAutomation.pricing.title')}</h2>
      <p class="text-wrs-gray text-center mb-4">{i18n.t('smeAutomation.pricing.sub')}</p>
      <p class="text-sm text-wrs-gray text-center mb-10 max-w-2xl mx-auto">{i18n.t('smeAutomation.pricing.intro')}</p>
    </ScrollReveal>
    
    <div class="space-y-4">
      {#each i18n.t('smeAutomation.pricing.items') as tier, i}
        <ScrollReveal delay={i * 80}>
          <div class="bg-white rounded-xl border border-wrs-border hover:border-wrs-pink/30 transition-all overflow-hidden {i === 1 ? 'ring-2 ring-wrs-pink' : ''}">
            <div class="flex flex-col sm:flex-row">
              <!-- Step number + label -->
              <div class="sm:w-48 p-5 bg-wrs-off-white sm:bg-white border-b sm:border-b-0 sm:border-r border-wrs-border flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                <div class="w-10 h-10 rounded-full {i === 1 ? 'bg-wrs-pink text-white' : 'bg-wrs-pink/10 text-wrs-pink'} font-bold flex items-center justify-center text-sm flex-shrink-0">{i}</div>
                <div>
                  <h3 class="font-bold text-wrs-ink text-sm">{tier.title}</h3>
                  <p class="text-xs text-wrs-gray hidden sm:block">{tier.scope}</p>
                </div>
              </div>
              <!-- Content -->
              <div class="flex-1 p-5">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div class="flex-1">
                    <div class="text-lg font-bold text-wrs-pink mb-1">{tier.price}</div>
                    <p class="text-sm text-wrs-gray leading-relaxed">{tier.desc}</p>
                  </div>
                  {#if tier.link}
                    <a href={tier.link} class="inline-flex items-center gap-1 text-sm font-semibold text-wrs-pink hover:underline whitespace-nowrap">{i18n.t('smeAutomation.pricing.ctaText')} →</a>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
    <p class="text-center text-sm text-wrs-gray mt-8">{i18n.t('smeAutomation.pricing.note')}</p>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-3xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">{i18n.t('smeAutomation.case.label')}</p>
      <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-8 text-center">{i18n.t('smeAutomation.case.title')}</h2>
    </ScrollReveal>
    <div class="grid grid-cols-3 gap-6 text-center">
      {#each i18n.t('smeAutomation.case.metrics') as r, i}
        <ScrollReveal delay={i * 100}>
          <div class="p-5 rounded-xl bg-white border border-wrs-border">
            <div class="text-2xl font-bold text-wrs-pink">{r.value}</div>
            <div class="text-xs text-wrs-gray mt-1">{r.label}</div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
    <p class="text-xs text-wrs-gray text-center mt-6">{i18n.t('smeAutomation.case.note')}</p>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-8 text-center">{i18n.t('smeAutomation.faq.title')}</h2></ScrollReveal>
    <div class="space-y-3">
      {#each i18n.t('smeAutomation.faq.items') as faq, i}
        <ScrollReveal delay={i * 60}>
          <details class="group border border-wrs-border rounded-xl overflow-hidden">
            <summary class="p-5 cursor-pointer font-semibold text-wrs-ink text-sm hover:text-wrs-pink transition-colors flex justify-between items-center">
              {faq.q}
              <span class="text-wrs-gray group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p class="px-5 pb-5 text-sm text-wrs-gray leading-relaxed">{faq.a}</p>
          </details>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-20 md:py-28 px-4 md:px-6 bg-wrs-ink relative overflow-hidden">
  <div class="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="dsme" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#E42869"/></pattern></defs><rect width="100%" height="100%" fill="url(#dsme)"/></svg></div>
  <div class="max-w-2xl mx-auto text-center relative z-10">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('smeAutomation.cta.badge')}</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{i18n.t('smeAutomation.cta.title')}</h2>
      <p class="text-lg text-gray-300 mb-4">{i18n.t('smeAutomation.cta.desc')}</p>
      <p class="text-gray-400 text-sm mb-8">{i18n.t('smeAutomation.cta.contact')}</p>
      <a href="/book" class="group inline-flex items-center gap-2 px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all text-lg">
        {i18n.t('smeAutomation.cta.button')} <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
