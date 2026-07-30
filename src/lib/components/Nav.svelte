<script>
  import { page } from '$app/state';

  let links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  let mobileOpen = $state(false);
  let scrolled = $state(false);

  $effect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
  <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="/" class="text-xl font-bold text-wrs-ink tracking-tight hover:text-wrs-pink transition-colors">
      WestRoadSouth
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-8">
      {#each links as link}
        <a href={link.href}
           class={`text-sm font-medium transition-colors duration-200 ${page.url.pathname === link.href ? 'text-wrs-pink' : 'text-wrs-gray hover:text-wrs-ink'}`}>
          {link.label}
        </a>
      {/each}
      <a href="/contact" class="ml-4 px-5 py-2 bg-wrs-pink text-white text-sm font-semibold rounded hover:bg-wrs-pink-hover transition-colors duration-200">
        Get in Touch
      </a>
    </div>

    <!-- Mobile hamburger -->
    <button class="md:hidden p-2" onclick={() => mobileOpen = !mobileOpen} aria-label="Toggle menu">
      <div class="w-5 h-0.5 bg-wrs-ink mb-1 transition-transform" class:rotate-45={mobileOpen} class:translate-y-1.5={mobileOpen}></div>
      <div class="w-5 h-0.5 bg-wrs-ink mb-1" class:opacity-0={mobileOpen}></div>
      <div class="w-5 h-0.5 bg-wrs-ink transition-transform" class:-rotate-45={mobileOpen} class:-translate-y-1.5={mobileOpen}></div>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div class="md:hidden bg-white border-t border-wrs-border px-6 py-4 space-y-3">
      {#each links as link}
        <a href={link.href}
           class={`block text-sm font-medium py-1 transition-colors ${page.url.pathname === link.href ? 'text-wrs-pink' : 'text-wrs-ink'}`}
           onclick={() => mobileOpen = false}>
          {link.label}
        </a>
      {/each}
      <a href="/contact" class="block mt-3 px-5 py-2.5 bg-wrs-pink text-white text-sm font-semibold rounded text-center hover:bg-wrs-pink-hover transition-colors"
         onclick={() => mobileOpen = false}>
        Get in Touch
      </a>
    </div>
  {/if}
</nav>
