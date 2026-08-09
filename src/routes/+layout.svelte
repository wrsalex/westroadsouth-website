<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { createI18n } from '$lib/i18n.svelte';
  import { page } from '$app/state';

  const i18n = createI18n();
  let { children } = $props();

  const langOptions = [
    { key: 'en' as const, label: 'EN', hreflang: 'en' },
    { key: 'tc' as const, label: '繁', hreflang: 'zh-Hant-HK' },
    { key: 'sc' as const, label: '简', hreflang: 'zh-Hans' }
  ];

  const hreflangMap: Record<string, string> = { en: 'en', tc: 'zh-Hant-HK', sc: 'zh-Hans' };

  const baseCanonical = $derived('https://westroadsouth.com' + page.url.pathname);
</script>

<svelte:head>
  <!-- Structural Meta (per-page content tags handled by SEO.svelte component) -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="AI agent, artificial intelligence, Hong Kong, AI development, process automation, enterprise AI, machine learning, WestRoadSouth" />
  <meta name="author" content="WestRoadSouth Limited" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={baseCanonical} />

  <!-- Open Graph (structural only — title/description/image handled per-page) -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="WestRoadSouth" />
  <meta property="og:url" content={baseCanonical} />
  <meta property="og:locale" content={hreflangMap[i18n.current]} />

  <!-- Hreflang -->
  <link rel="alternate" hreflang="en" href={baseCanonical} />
  <link rel="alternate" hreflang="zh-Hant-HK" href={baseCanonical + '?lang=tc'} />
  <link rel="alternate" hreflang="zh-Hans" href={baseCanonical + '?lang=sc'} />
  <link rel="alternate" hreflang="x-default" href={baseCanonical} />

</svelte:head>

<div class="min-h-screen bg-wrs-white flex flex-col">
  <Nav {i18n} />
  <main class="flex-1 pt-16">
    {@render children()}
  </main>
  <Footer {i18n} />

  <!-- Sticky Booking Bar -->
  <div class="fixed bottom-0 left-0 right-0 z-40 bg-wrs-ink border-t border-white/10 py-3 px-4 md:hidden">
    <a href="/book" class="flex items-center justify-center gap-2 w-full py-3 bg-wrs-pink text-white font-semibold rounded-lg text-sm hover:bg-wrs-pink-hover transition-all">
      {i18n.t('book.label')} <span>→</span>
    </a>
  </div>
  <div class="fixed bottom-0 left-0 right-0 z-40 bg-wrs-ink/95 backdrop-blur border-t border-white/10 py-3 px-6 hidden md:flex items-center justify-between">
    <div class="flex items-center gap-4">
      <span class="text-white text-sm font-medium">{i18n.t('book.subheading')}</span>
    </div>
    <a href="/book" class="inline-flex items-center gap-2 px-6 py-2.5 bg-wrs-pink text-white font-semibold rounded-lg text-sm hover:bg-wrs-pink-hover transition-all">
      {i18n.t('book.label')} <span>→</span>
    </a>
  </div>
  <!-- Spacer for sticky bar -->
  <div class="h-16 md:h-14"></div>

  <!-- Language Switcher -->
  <div class="fixed bottom-20 right-6 z-50 flex gap-1 bg-white rounded-full shadow-lg border border-wrs-border p-1">
    {#each langOptions as opt}
      <button
        onclick={() => i18n.setLang(opt.key)}
        class="w-9 h-9 rounded-full text-xs font-semibold transition-all duration-200"
        class:bg-wrs-pink={i18n.current === opt.key}
        class:text-white={i18n.current === opt.key}
        class:text-wrs-gray-light={i18n.current !== opt.key}
        class:hover:text-wrs-ink={i18n.current !== opt.key}
        title={opt.key === 'en' ? 'English' : opt.key === 'tc' ? '繁體中文' : '简体中文'}
      >
        {opt.label}
      </button>
    {/each}
  </div>
</div>
