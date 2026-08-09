<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title={i18n.t('processPage.hero.badge')}
  description="How we build AI agents: discovery audit → architecture design → iterative development → deployment → continuous optimization. A proven 5-phase methodology refined over 200+ projects."
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('processPage.hero.badge')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6">{i18n.t('processPage.hero.title')}</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">{i18n.t('processPage.hero.desc')}</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <div class="relative">
      <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-wrs-border -translate-x-1/2 hidden md:block"></div>
      {#each i18n.t('processPage.steps') as step, i}
        <ScrollReveal delay={i * 100}>
          <div class="relative mb-16 md:mb-24 last:mb-0">
            <div class="md:grid md:grid-cols-2 md:gap-12 items-start">
              <div class="{i % 2 === 1 ? 'md:order-2' : ''}">
                <div class="flex items-start gap-4 md:gap-6">
                  <div class="w-12 h-12 rounded-xl bg-wrs-pink text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <h2 class="text-xl font-bold text-wrs-ink mb-2">{step.title}</h2>
                    <p class="text-wrs-gray leading-relaxed mb-4">{step.desc}</p>
                    <div class="space-y-1.5">
                      {#each step.items as item}
                        <div class="flex items-center gap-2 text-sm text-wrs-gray">
                          <svg class="w-3.5 h-3.5 text-wrs-pink flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                          {item}
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
              <div class="hidden md:block {i % 2 === 1 ? 'md:order-1' : ''}"></div>
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink relative overflow-hidden">
  <div class="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="dp2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#E42869"/></pattern></defs><rect width="100%" height="100%" fill="url(#dp2)"/></svg></div>
  <div class="max-w-2xl mx-auto text-center relative z-10">
    <ScrollReveal>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{i18n.t('processPage.cta.title')}</h2>
      <p class="text-lg text-gray-300 mb-10">{i18n.t('processPage.cta.desc')}</p>
      <a href="/book" class="group inline-flex items-center gap-2 px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all text-lg">{i18n.t('processPage.cta.button')} <span class="group-hover:translate-x-1 transition-transform">→</span></a>
    </ScrollReveal>
  </div>
</section>