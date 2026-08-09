<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
  let images = ['/images/blog-ai-vs-chatbots.png','/images/blog-checklist.png','/images/blog-hk-logistics.png','/images/blog-open-source-acrn.png','/images/blog-multilingual-ai.png','/images/blog-roi-deployments.png'];
</script>

<SEO
  title={i18n.t('blogPage.hero.badge')}
  description="Practical articles on AI agents: architecture decisions, deployment patterns, ROI measurement, and lessons from production. No hype — just what works."
  ogType="website"
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"ItemList","name":"WestRoadSouth AI Agent Blog","description":"Practical articles on AI agents: architecture decisions, deployment patterns, ROI measurement, and lessons from production.","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"Article","name":"What Is an AI Agent? — A Practical Guide for Business Leaders","url":"https://westroadsouth.com/blog"}},{"@type":"ListItem","position":2,"item":{"@type":"Article","name":"When to Automate vs. When to Build Custom — A Decision Framework","url":"https://westroadsouth.com/blog"}},{"@type":"ListItem","position":3,"item":{"@type":"Article","name":"Measuring AI ROI — Beyond “Time Saved”","url":"https://westroadsouth.com/blog"}}]}</script>'}
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('blogPage.hero.badge')}</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6">{i18n.t('blogPage.hero.title')}</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">{i18n.t('blogPage.hero.desc')}</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <div class="grid gap-6">
      {#each i18n.t('blogPage.posts') as post, i}
        <ScrollReveal delay={i * 80}>
          <article class="group bg-white rounded-xl border border-wrs-border overflow-hidden hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div class="h-48 overflow-hidden bg-wrs-ink">
              <img src={images[i]} alt={post.title} class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div class="p-6 md:p-8">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-[10px] font-semibold text-wrs-pink uppercase tracking-wider bg-wrs-pink/5 px-2.5 py-1 rounded-full">{post.tag}</span>
                <span class="text-xs text-wrs-gray-light">{post.date}</span>
                <span class="text-xs text-wrs-gray-light">· {post.readTime}</span>
              </div>
              <h2 class="text-lg md:text-xl font-bold text-wrs-ink mb-2 group-hover:text-wrs-pink transition-colors">{post.title}</h2>
              <p class="text-wrs-gray text-sm leading-relaxed">{post.desc}</p>
            </div>
          </article>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-2 text-center">{i18n.t('exploreMore.title')}</h2>
    <p class="text-wrs-gray text-sm text-center mb-10">{i18n.t('exploreMore.sub')}</p>
    <div class="grid sm:grid-cols-3 gap-4">
      <a href="/case-studies" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center"><h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.caseStudies')}</h3><p class="text-xs text-wrs-gray">{i18n.t('exploreMore.caseDesc')}</p></a>
      <a href="/demo/researchvault" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center"><h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.researchVault')}</h3><p class="text-xs text-wrs-gray">{i18n.t('exploreMore.researchDesc')}</p></a>
      <a href="/book" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center"><h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">{i18n.t('exploreMore.getInTouch')}</h3><p class="text-xs text-wrs-gray">{i18n.t('exploreMore.getInTouchDesc')}</p></a>
    </div>
  </div>
</section>