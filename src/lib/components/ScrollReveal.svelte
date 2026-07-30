<script>
  let { delay = 0, children } = $props();
  let visible = $state(false);
  let el = $state(null);

  $effect(() => {
    if (typeof window === 'undefined' || !el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { visible = true; }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={el}
  class="transition-all duration-700 ease-out"
  class:opacity-0={!visible}
  class:translate-y-8={!visible}
  class:opacity-100={visible}
  class:translate-y-0={visible}
>
  {@render children?.()}
</div>
