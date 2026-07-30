<script>
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  let phases = [
    {
      step: '01',
      title: 'Discover',
      duration: '1-2 weeks',
      desc: 'We embed with your team to understand your workflows, data, and pain points. Every process is documented, every bottleneck quantified. You get a prioritized opportunity map with ROI estimates for each automation candidate.',
      deliverables: ['As-is process maps', 'Bottleneck heatmap', 'ROI opportunity matrix', 'Technical feasibility assessment']
    },
    {
      step: '02',
      title: 'Design',
      duration: '2-4 weeks',
      desc: 'We architect the solution: which AI models, what integration points, where humans stay in the loop. You review and approve the architecture before a single line of code is written.',
      deliverables: ['Agent architecture document', 'Integration specification', 'Data flow diagrams', 'Security and compliance review', 'Proof-of-concept scope']
    },
    {
      step: '03',
      title: 'Deploy',
      duration: '4-8 weeks',
      desc: 'Agents go live in your environment with monitoring, logging, and gradual rollout controls. We start with a shadow mode — agents process real data alongside your team — before switching to autonomous operation.',
      deliverables: ['Production agent deployment', 'Monitoring dashboard', 'Fallback and escalation procedures', 'Team training sessions', 'Initial performance baseline']
    },
    {
      step: '04',
      title: 'Optimize',
      duration: 'Ongoing',
      desc: 'Agents improve with every interaction. We review KPIs monthly, fine-tune models on new data, and expand automation scope as confidence increases. You own the agents — we ensure they keep getting better.',
      deliverables: ['Monthly KPI reports', 'Model retraining schedule', 'Cost optimization recommendations', 'Expansion roadmap updates']
    }
  ];
</script>

<svelte:head>
  <title>Process — WestRoadSouth</title>
</svelte:head>

<!-- Hero -->
<section class="py-24 md:py-32 px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">How We Work</p>
      <h1 class="text-4xl md:text-5xl font-bold text-wrs-ink mb-6">From assessment to autonomous operation</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">
        Four phases, zero guesswork. Every engagement follows a proven methodology designed to deliver measurable results — fast.
      </p>
    </ScrollReveal>
  </div>
</section>

<!-- Process Timeline -->
<section class="py-24 px-6">
  <div class="max-w-4xl mx-auto">
    {#each phases as phase, i}
      <ScrollReveal delay={i * 100}>
        <div class="relative pl-12 md:pl-20 pb-16 border-l-2 border-wrs-border last:border-l-0 last:pb-0">
          <!-- Step dot -->
          <div class="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-wrs-pink text-white flex items-center justify-center text-sm font-bold shadow-md">
            {phase.step}
          </div>

          <div>
            <div class="flex items-center gap-3 mb-3">
              <h2 class="text-2xl font-bold text-wrs-ink">{phase.title}</h2>
              <span class="text-xs text-wrs-pink font-semibold bg-wrs-pink/10 px-3 py-1 rounded-full">{phase.duration}</span>
            </div>

            <p class="text-wrs-gray leading-relaxed mb-5">{phase.desc}</p>

            <div class="bg-wrs-off-white rounded-lg p-5 border border-wrs-border">
              <p class="text-xs text-wrs-gray-light uppercase tracking-wider font-semibold mb-3">Deliverables</p>
              <div class="grid md:grid-cols-2 gap-2">
                {#each phase.deliverables as d}
                  <div class="flex items-center gap-2 text-sm text-wrs-ink">
                    <span class="text-wrs-pink text-xs">◆</span>
                    <span>{d}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    {/each}
  </div>
</section>

<!-- Why this works -->
<section class="py-20 px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-10 text-center">Why this process works</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="text-3xl mb-3">🔒</div>
          <h3 class="font-semibold text-wrs-ink mb-2">No black boxes</h3>
          <p class="text-sm text-wrs-gray">Every decision point is documented. You understand what the agents do and why — no opaque AI magic.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-3xl mb-3">📐</div>
          <h3 class="font-semibold text-wrs-ink mb-2">Measured at every step</h3>
          <p class="text-sm text-wrs-gray">KPIs are defined before development starts. Every phase has clear success criteria and go/no-go gates.</p>
        </div>
        <div class="text-center p-6">
          <div class="text-3xl mb-3">🤝</div>
          <h3 class="font-semibold text-wrs-ink mb-2">Your team, empowered</h3>
          <p class="text-sm text-wrs-gray">We transfer knowledge at every phase. By the end, your team can maintain and extend the agents independently.</p>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<!-- CTA -->
<section class="py-20 px-6 bg-wrs-ink text-center">
  <div class="max-w-2xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Ready to see what AI can automate?</h2>
      <p class="text-gray-300 mb-8">It starts with a conversation. No commitment, no cost — just a practical discussion about your workflows.</p>
      <a href="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-colors">
        Start the Conversation <span>→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
