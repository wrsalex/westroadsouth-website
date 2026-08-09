<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();

  let stats = [
    { value: 50, suffix: '+', label: 'AI Agents Deployed', sub: 'In production across APAC' },
    { value: 12, suffix: '+', label: 'Years Building AI', sub: 'Since before the hype' },
    { value: 200, suffix: '+', label: 'Projects Delivered', sub: 'Enterprise to startup' },
    { value: 98, suffix: '%', label: 'Client Retention', sub: 'Partnerships, not transactions' }
  ];

  let values = [
    { title: 'Ship Working Software', desc: `Demos don't count. We deploy to production, measure real outcomes, and iterate based on data — not opinions.` },
    { title: 'Open Source by Default', desc: 'Our core stack is open source. Clients own their agents. No vendor lock-in, no black boxes, no surprises.' },
    { title: 'Solve Real Problems', desc: `We don't build AI for AI's sake. Every engagement starts with understanding the business outcome you need.` },
    { title: 'Build for Scale', desc: 'From day one, our agents are designed for production: monitoring, failover, audit trails, and graceful degradation.' }
  ];
</script>

<SEO
  title="About WestRoadSouth — AI Agent Company Based in Hong Kong"
  description="Born in Hong Kong, built for the world. 12 years delivering AI solutions, 50+ agents deployed, 200+ projects, 98% client retention. We ship working software."
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('aboutPage.title')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6">{i18n.t('aboutPage.subtitle')}</h1>
    </ScrollReveal>
  </div>
</section>

<section class="py-14 md:py-28 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-3xl mx-auto">
    <img src="/images/about-hk-visual.png" alt="Hong Kong meets AI" class="w-full rounded-2xl mb-12 shadow-lg" />
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('aboutPage.story.label')}</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-8">{i18n.t('aboutPage.story.heading')}</h2>
      <div class="space-y-6 text-wrs-gray leading-relaxed text-lg">
        <p>{i18n.t('aboutPage.story.p1')}</p>
        <p>{i18n.t('aboutPage.story.p2')}</p>
        <p>{i18n.t('aboutPage.story.p3')}</p>
      </div>
    </ScrollReveal>
  </div>
</section>

<section class="py-14 md:py-24 px-4 md:px-6">
  <div class="max-w-4xl mx-auto">
    <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">{i18n.t('aboutPage.stats.label')}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      {#each stats as stat, i}
        <ScrollReveal delay={i * 100}>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-wrs-ink mb-2">{stat.value}{stat.suffix}</div>
            <div class="text-sm font-semibold text-wrs-ink mb-1">{stat.label}</div>
            <div class="text-xs text-wrs-gray-light">{stat.sub}</div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-14 md:py-28 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">{i18n.t('aboutPage.values.label')}</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-12 text-center">{i18n.t('aboutPage.values.heading')}</h2>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 gap-8">
      {#each values as v, i}
        <ScrollReveal delay={i * 150}>
          <div class="p-8 rounded-xl border border-wrs-border bg-white hover:border-wrs-pink hover:-translate-y-1 transition-all duration-300">
            <div class="w-8 h-8 rounded-lg bg-wrs-pink/10 flex items-center justify-center text-wrs-pink font-bold text-sm mb-4">{i + 1}</div>
            <h3 class="text-lg font-bold text-wrs-ink mb-3">{v.title}</h3>
            <p class="text-wrs-gray text-sm leading-relaxed">{v.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-2 text-center">{i18n.t('exploreMore.title')}</h2>
    <p class="text-wrs-gray text-sm text-center mb-10">{i18n.t('exploreMore.sub')}</p>
    <div class="grid sm:grid-cols-3 gap-4">
      <a href="/services" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.services')}</h3>
        <p class="text-xs text-wrs-gray">{i18n.t('exploreMore.servicesDesc')}</p>
      </a>
      <a href="/process" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.howWeWork')}</h3>
        <p class="text-xs text-wrs-gray">{i18n.t('exploreMore.sub')}</p>
      </a>
      <a href="/case-studies" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.caseStudies')}</h3>
        <p class="text-xs text-wrs-gray">{i18n.t('exploreMore.caseDesc2')}</p>
      </a>
    </div>
  </div>
</section>
<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-ink relative overflow-hidden">
  <div class="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="da" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#E42869"/></pattern></defs><rect width="100%" height="100%" fill="url(#da)"/></svg></div>
  <div class="max-w-2xl mx-auto text-center relative z-10">
    <ScrollReveal>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{i18n.t('aboutPage.cta')}</h2>
      <p class="text-lg text-gray-300 mb-10">{i18n.t('aboutPage.ctaDesc')}</p>
      <a href="/book" class="group inline-flex items-center gap-2 px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all text-lg">
        {i18n.t('aboutPage.ctaButton')}
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
