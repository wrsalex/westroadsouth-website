<script>
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import HeroAnimation from '$lib/components/HeroAnimation.svelte';
  import StatCounter from '$lib/components/StatCounter.svelte';

  let services = [
    {
      icon: '🤖',
      title: 'AI Agent Development',
      desc: 'Custom autonomous agents that handle complex workflows, make real-time decisions, and integrate with your existing systems. Built for reliability, designed for scale.'
    },
    {
      icon: '⚡',
      title: 'Work Process Optimization',
      desc: 'We analyze your operations end-to-end, identify bottlenecks, and deploy AI agents that eliminate manual overhead. Typical outcomes: 40-60% reduction in processing time.'
    },
    {
      icon: '💬',
      title: 'Agent-Powered Customer Service',
      desc: 'Conversational AI that resolves 70%+ of inquiries without human intervention. Multilingual, 24/7, integrated with your CRM, helpdesk, and knowledge base.'
    }
  ];

  let stats = [
    { value: 50, suffix: '+', label: 'AI Agents Deployed', sub: 'in production across industries' },
    { value: 12, suffix: '+', label: 'Years in Business', sub: 'delivering enterprise solutions' },
    { value: 200, suffix: '+', label: 'Projects Delivered', sub: 'across APAC and global markets' },
    { value: 98, suffix: '%', label: 'Client Retention', sub: 'partnerships, not transactions' }
  ];

  let trustLogos = ['Enterprise', 'SME', 'Startup', 'Gov', 'Finance'];
</script>

<svelte:head>
  <title>WestRoadSouth — AI Agent Services</title>
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden bg-wrs-white">
  <HeroAnimation />

  <div class="max-w-6xl mx-auto px-6 py-28 md:py-40 relative z-10">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wrs-pink/20 bg-wrs-pink/5 text-wrs-pink text-xs font-semibold uppercase tracking-widest mb-8">
        <span class="w-2 h-2 rounded-full bg-wrs-pink animate-pulse"></span>
        AI Agent Services
      </div>

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-wrs-ink leading-[1.08] mb-6">
        We build AI agents<br>
        <span class="text-wrs-pink">that do the work</span>
      </h1>

      <p class="text-lg md:text-xl text-wrs-gray leading-relaxed max-w-xl mb-10">
        From automating routine operations to orchestrating complex workflows — we deploy intelligent agents that reduce costs, eliminate errors, and scale your business without scaling headcount.
      </p>

      <div class="flex flex-wrap gap-4">
        <a href="/contact" class="group inline-flex items-center gap-2 px-8 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all duration-200">
          Start Your AI Journey
          <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
        <a href="/services" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-wrs-pink text-wrs-pink font-semibold rounded hover:bg-wrs-pink hover:text-white transition-all duration-200">
          Explore Services
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Trust bar -->
<section class="border-y border-wrs-border bg-wrs-off-white">
  <div class="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center md:justify-between gap-6">
    <span class="text-xs text-wrs-gray-light uppercase tracking-widest font-semibold">Trusted by organizations across</span>
    <div class="flex flex-wrap gap-6">
      {#each trustLogos as name}
        <span class="text-sm text-wrs-ink-dim font-semibold">{name}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Stats -->
<section class="py-20 md:py-24 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each stats as stat, i}
        <ScrollReveal delay={i * 100}>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-wrs-ink mb-2">
              <StatCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div class="text-sm font-semibold text-wrs-ink mb-1">{stat.label}</div>
            <div class="text-xs text-wrs-gray-light">{stat.sub}</div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- Services Preview -->
<section class="py-24 md:py-28 px-6 bg-wrs-off-white">
  <div class="max-w-6xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
      <h2 class="text-3xl md:text-4xl font-bold text-wrs-ink mb-4">AI-native services for the modern enterprise</h2>
      <p class="text-wrs-gray max-w-2xl mb-14">Every engagement starts with understanding your business. We don't sell AI — we solve problems.</p>
    </ScrollReveal>

    <div class="grid md:grid-cols-3 gap-8">
      {#each services as svc, i}
        <ScrollReveal delay={i * 150}>
          <a href="/services" class="group block p-8 rounded-lg border border-wrs-border bg-white hover:border-wrs-pink hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="text-3xl mb-5">{svc.icon}</div>
            <h3 class="text-lg font-semibold text-wrs-ink mb-3 group-hover:text-wrs-pink transition-colors">{svc.title}</h3>
            <p class="text-sm text-wrs-gray leading-relaxed mb-4">{svc.desc}</p>
            <span class="text-sm font-semibold text-wrs-pink group-hover:gap-2 flex items-center gap-1 transition-all">
              Learn more <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </ScrollReveal>
      {/each}
    </div>

    <ScrollReveal delay={300}>
      <div class="text-center mt-12">
        <a href="/services" class="inline-flex items-center gap-2 text-wrs-pink font-semibold hover:underline">
          View all services <span>→</span>
        </a>
      </div>
    </ScrollReveal>
  </div>
</section>

<!-- CTA -->
<section class="py-24 md:py-32 px-6 bg-wrs-ink relative overflow-hidden">
  <!-- Subtle animated background -->
  <div class="absolute inset-0 opacity-10">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#E42869" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>

  <div class="max-w-3xl mx-auto text-center relative z-10">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Ready to Automate?</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Let's talk about what AI can do for your business</h2>
      <p class="text-lg text-gray-300 leading-relaxed mb-10">
        No jargon. No hard sell. Just a practical conversation about your workflows and where intelligent automation fits.
      </p>
      <a href="/contact" class="group inline-flex items-center gap-2 px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all duration-200 text-lg">
        Get in Touch
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
