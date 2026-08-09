1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  let phase = $state(0); let exploring = $state(false);
  const phases = ['Topic Input', 'Research Scrape', 'Evidence Graph', 'Knowledge Ready'];

  function explore() { exploring = true; phase = 0; let i = 0; const t = setInterval(() => { i++; phase = i; if (i >= 3) { clearInterval(t); exploring = false; } }, 2000); }
  function reset() { phase = 0; exploring = false; }

  const benefits = [
    { icon: '⏱️', title: 'Weeks → Minutes', desc: `What takes a research team 2-3 weeks — market landscape, competitive analysis, technology assessment — Research Vault completes in under 10 minutes.` },
    { icon: '🧠', title: 'Structured Knowledge Graph', desc: `Not a wall of text. Research Vault builds a connected knowledge graph: workstreams → evidence → claims → decisions — all traceable and auditable.` },
    { icon: '🔍', title: 'No More Blind Spots', desc: `The AI actively searches for gaps in your research. It flags missing evidence, untested claims, and unexplored angles you might have missed.` },
    { icon: '📊', title: 'Decision-Ready Output', desc: `Every research project ends with a decision registry — what was decided, why, with what evidence. Perfect for investment committees and board decks.` },
    { icon: '🔄', title: 'Continuous Monitoring', desc: `Set up a research project once and Research Vault continuously monitors new publications, patents, and market moves — alerting you to changes that matter.` },
    { icon: '🔗', title: 'Source-Level Traceability', desc: `Every claim links back to its source evidence. Click any insight and see exactly which paper, patent, or data point supports it.` }
  ];

  const consulting = [
    { title: 'Research Workflow Design', desc: `We design the research framework — defining workstreams, evidence types, and decision criteria tailored to your industry and use case.` },
    { title: 'Domain-Specific Configuration', desc: `Biotech needs different evidence weighting than fintech. We configure Research Vault's AI to prioritize the right sources and score claims appropriately.` },
    { title: 'Due Diligence Acceleration', desc: `For VCs and PE firms: we set up Research Vault to run parallel due diligence on multiple targets simultaneously, cutting deal evaluation time by 80%.` },
    { title: 'Ongoing Research as a Service', desc: `We operate Research Vault on your behalf — delivering weekly intelligence briefs on your markets, competitors, and technology landscape.` }
  ];
</script>

<SEO
  title="Research Vault — Autonomous AI Research Engine & Knowledge Graph"
  description="From idea to structured knowledge graph in minutes. Autonomous multi-phase research that turns weeks of market analysis into decision-ready intelligence."
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Research Vault","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Autonomous AI research engine that builds structured knowledge graphs from a single topic — turns weeks of market analysis into decision-ready intelligence.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@id":"https://westroadsouth.com/#org"}}</script>'}
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white text-center">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wrs-pink/20 bg-wrs-pink/5 text-wrs-pink text-xs font-semibold uppercase tracking-widest mb-6">Product</span>
      <h1 class="text-3xl md:text-6xl font-bold text-wrs-ink mb-4">Research Vault</h1>
      <p class="text-xl text-wrs-pink font-medium mb-6">AI Research Engine — From Idea to Knowledge Graph</p>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">Stop spending weeks on market research. Research Vault autonomously builds a complete knowledge graph — workstreams, evidence, claims, and decisions — from a single topic. Built for VCs, corporate strategy, and innovation teams.</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-10 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <div class="flex justify-center gap-2 mb-8 flex-wrap">
      {#each phases as p, i}
        <span class="px-4 py-2 rounded-full text-xs font-semibold transition-all {phase >= i ? 'bg-wrs-pink text-white' : 'bg-white text-wrs-gray border border-wrs-border'}">{i + 1}. {p}</span>
      {/each}
    </div>
    <div class="bg-white rounded-2xl border border-wrs-border shadow-sm overflow-hidden relative">
      <div class="aspect-[2/1] relative bg-[#0a0a0f]">
        <svg viewBox="0 0 800 400" class="w-full h-full">
          <circle cx="100" cy="200" r={phase >= 0 ? 20 : 8} fill="#FF9900" opacity="0.9"><animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite"/></circle>
          <text x="100" y="205" fill="white" text-anchor="middle" font-size="9" font-family="monospace" font-weight="bold">Topic</text>
          {#each [{p:1,x:280,y:60,c:'#E42869',l:'Workstream: Hardware'},{p:1,x:180,y:180,c:'#FF9900',l:'Workstream: ML'},{p:2,x:380,y:100,c:'#6BA4F0',l:'Evidence: Paper'},{p:2,x:400,y:200,c:'#6BA4F0',l:'Evidence: Patent'},{p:3,x:520,y:140,c:'#44CC66',l:'Claim: Feasible'}] as ev}
            {#if phase >= ev.p}
              <circle cx={ev.x} cy={ev.y} r="8" fill={ev.c} opacity="0.8"><animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite"/></circle>
              <text x={ev.x} y={ev.y - 14} fill="white" text-anchor="middle" font-size="8" font-family="monospace" opacity="0.8">{ev.l}</text>
              <line x1="115" y1="195" x2={ev.x} y2={ev.y} stroke={ev.c} stroke-width="0.5" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></line>
            {/if}
          {/each}
          {#if phase >= 3}
            <circle cx="520" cy="280" r="0" fill="#44CC66" opacity="0"><animate attributeName="r" values="0;7;0" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/></circle>
          {/if}
        </svg>
      </div>
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <button onclick={explore} disabled={exploring} class="px-6 py-2.5 bg-wrs-pink text-white rounded-full text-sm font-semibold hover:bg-wrs-pink-hover disabled:opacity-50">{exploring ? 'Exploring...' : '▶ Explore Topic'}</button>
        <button onclick={reset} class="px-6 py-2.5 border border-white/20 rounded-full text-sm text-gray-400 hover:border-wrs-pink hover:text-wrs-pink">↺ Reset</button>
      </div>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">Why Research Teams Choose Research Vault</h2><p class="text-wrs-gray text-center mb-12 max-w-xl mx-auto">From due diligence to technology scouting — here's what Research Vault unlocks.</p></ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each benefits as b, i}
        <ScrollReveal delay={i * 80}>
          <div class="p-6 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-2xl mb-3">{b.icon}</div>
            <h3 class="font-bold text-wrs-ink mb-2">{b.title}</h3>
            <p class="text-sm text-wrs-gray leading-relaxed">{b.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">How We Help</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">Our consultants turn research into decisions</h2>
      <p class="text-wrs-gray text-center mb-12 max-w-xl mx-auto">Research Vault is powerful. Our team ensures it's configured for your specific domain and delivers actionable intelligence.</p>
    </ScrollReveal>
    <div class="space-y-6">
      {#each consulting as c, i}
        <ScrollReveal delay={i * 100}>
          <div class="flex gap-5 p-6 bg-white rounded-xl border border-wrs-border hover:border-wrs-pink/20 transition-all">
            <div class="w-10 h-10 rounded-lg bg-wrs-pink/10 flex items-center justify-center text-wrs-pink font-bold text-sm flex-shrink-0">{i + 1}</div>
            <div><h3 class="font-bold text-wrs-ink mb-1">{c.title}</h3><p class="text-sm text-wrs-gray leading-relaxed">{c.desc}</p></div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-2 text-center">Explore More</h2>
    <p class="text-wrs-gray text-sm text-center mb-10">Continue exploring what we offer</p>
    <div class="grid sm:grid-cols-3 gap-4">
      <a href="/demo/designhub" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">DesignHub v2</h3>
        <p class="text-xs text-wrs-gray">SwiftUI code generation</p>
      </a>
      <a href="/demo/avionone" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">AvionOne</h3>
        <p class="text-xs text-wrs-gray">AI companion for iPhone</p>
      </a>
      <a href="/case-studies" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">Case Studies</h3>
        <p class="text-xs text-wrs-gray">Research Vault in production</p>
      </a>
    </div>
  </div>
</section>
<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center"><div class="max-w-xl mx-auto"><ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Turn research into action</h2><p class="text-gray-400 mb-8">Book a demo. We'll run a research topic of your choice and show you the knowledge graph in real time.</p><a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover">Book a Demo →</a></ScrollReveal></div></section>