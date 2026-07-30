<script>
  import { onMount } from 'svelte';

  let { target = 0, suffix = '', duration = 2000 } = $props();
  let current = $state(0);
  let el = $state(null);

  onMount(() => {
    if (!el || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(animate);
            else current = target;
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<span bind:this={el} class="tabular-nums">{current}{suffix}</span>
