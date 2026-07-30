<script>
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>About — West Road South</title>
</svelte:head>

<section class="py-24 md:py-32 px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
      <h1 class="text-4xl md:text-5xl font-bold text-wrs-ink mb-6">We've been building AI before it was called AI</h1>
    </ScrollReveal>

    <ScrollReveal delay={150}>
      <div class="prose prose-lg max-w-none text-wrs-gray leading-relaxed space-y-6">
        <p>
          West Road South was founded in 2014 as a technology consultancy. Over the past decade, we've delivered over 200 projects — from eCommerce platforms processing millions in transactions to enterprise data pipelines handling billions of records.
        </p>
        <p>
          When large language models emerged, we didn't chase the hype. We methodically integrated AI into the workflows we already understood — automating the tedious, augmenting the complex, and measuring everything against real business metrics.
        </p>
        <p>
          Today, we're an AI agent services agency. We build autonomous agents that handle multi-step business processes, integrate with existing systems, and deliver measurable ROI — typically within 3-6 months.
        </p>
      </div>
    </ScrollReveal>
  </div>
</section>

<!-- Values -->
<section class="py-20 px-6">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-12 text-center">What we believe</h2>
    </ScrollReveal>

    <div class="grid md:grid-cols-2 gap-8">
      {#each [
        { title: 'Outcomes over hype', desc: 'We don\'t sell AI — we solve problems. If a spreadsheet is the right tool, we\'ll tell you. If an agent will save you 200 hours a month, we\'ll build it.' },
        { title: 'Transparency by default', desc: 'No black boxes. Every agent we deploy is documented, auditable, and explainable. You own the IP, the data, and the models.' },
        { title: 'Humans in the loop', desc: 'AI augments humans, not replaces them. Our agents handle the routine; your team handles the exceptions — with full visibility into both.' },
        { title: 'Measured, not assumed', desc: 'Every engagement starts with baseline metrics and ends with an ROI calculation. If we can\'t measure it, we don\'t claim it.' }
      ] as value}
        <ScrollReveal delay={100}>
          <div class="p-6 rounded-lg border border-wrs-border hover:border-wrs-pink transition-colors duration-200">
            <h3 class="font-semibold text-wrs-ink mb-2">{value.title}</h3>
            <p class="text-sm text-wrs-gray leading-relaxed">{value.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-20 px-6 bg-wrs-ink text-center">
  <div class="max-w-2xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Let's build something together</h2>
      <p class="text-gray-300 mb-8">Whether you're exploring what AI can do or ready to deploy — we're here to help.</p>
      <a href="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-colors">
        Get in Touch <span>→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
