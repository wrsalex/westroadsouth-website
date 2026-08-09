<script lang="ts">
  let { i18n } = $props();
  let menuOpen = $state(false);
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-wrs-border">
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="text-lg font-bold text-wrs-ink tracking-tight">WestRoadSouth</a>

    <!-- Desktop -->
    <div class="hidden md:flex items-center gap-8">
      <a href="/" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.home')}</a>
      <a href="/services" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.services')}</a>
      <a href="/sme-automation" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.sme')}</a>
      <a href="/process" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.process')}</a>
      <a href="/case-studies" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.cases')}</a>
      <a href="/blog" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.blog')}</a>
      <a href="/about" class="text-sm text-wrs-gray hover:text-wrs-pink transition-colors">{i18n.t('nav.about')}</a>
      <a href="/book" class="px-4 py-2 bg-wrs-pink text-white text-sm font-semibold rounded hover:bg-wrs-pink-hover transition-all">{i18n.t('nav.getInTouch')}</a>
    </div>

    <!-- Mobile hamburger -->
    <button onclick={() => menuOpen = !menuOpen} class="md:hidden p-2 text-wrs-ink">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        {#if menuOpen}<path d="M6 18L18 6M6 6l12 12"/>{:else}<path d="M4 6h16M4 12h16M4 18h16"/>{/if}
      </svg>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden border-t border-wrs-border bg-white px-6 py-4 space-y-3">
      <a href="/" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.home')}</a>
      <a href="/services" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.services')}</a>
      <a href="/sme-automation" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.sme')}</a>
      <a href="/process" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.process')}</a>
      <a href="/case-studies" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.cases')}</a>
      <a href="/blog" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.blog')}</a>
      <a href="/about" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.about')}</a>
      <a href="/pricing" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.pricing')}</a>
      <a href="/demo" class="block text-sm text-wrs-gray hover:text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.demo')}</a>
      <a href="/book" class="block text-sm font-semibold text-wrs-pink" onclick={() => menuOpen = false}>{i18n.t('nav.getInTouch')}</a>
    </div>
  {/if}
</nav>
