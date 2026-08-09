1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
  let step = $state(0); let playing = $state(false);

  const screens = ['Upload Design', 'AI Analysis', 'Code Generation', 'Ready to Ship'];
  function playDemo() { playing = true; step = 0; let i = 0; const t = setInterval(() => { i++; step = i; if (i >= 3) { clearInterval(t); playing = false; } }, 1800); }
  function resetDemo() { step = 0; playing = false; }

  const benefits = [
    { icon: '⚡', title: '10x Faster Development', desc: `What takes a developer 3-5 days to hand-code takes DesignHub 20 minutes. Ship features faster, iterate on feedback instantly.` },
    { icon: '🎯', title: 'Pixel-Perfect Output', desc: `DesignHub preserves your design system — colors, spacing, typography, and component hierarchy are translated faithfully to SwiftUI.` },
    { icon: '🔄', title: 'Live Sync with Figma', desc: `Update your Figma file and DesignHub regenerates the code. No more "design drift" between mockups and production.` },
    { icon: '🛡️', title: 'HIG Compliant by Default', desc: `Every generated view follows Apple's Human Interface Guidelines. Accessible, responsive, and App Store ready out of the box.` },
    { icon: '📦', title: 'Full Project Output', desc: `Not just views — DesignHub generates the full project structure: models, navigation, data bindings, and even unit tests.` },
    { icon: '🌐', title: 'Multi-Platform Ready', desc: `iOS, iPadOS, and macOS from the same design file. DesignHub handles platform-specific adaptations automatically.` }
  ];

  const consulting = [
    { title: 'Design System Audit', desc: `We review your Figma components and design tokens to ensure DesignHub generates optimal, production-ready code from day one.` },
    { title: 'Custom Component Mapping', desc: `Your design system has unique components. We configure DesignHub's AI to recognize and map them to your existing SwiftUI component library.` },
    { title: 'CI/CD Integration', desc: `We wire DesignHub into your GitHub Actions pipeline so every Figma update automatically creates a PR with the generated code.` },
    { title: 'Team Training & Adoption', desc: `We train your designers and developers on the DesignHub workflow — from setting up design files to reviewing generated PRs.` }
  ];
</script>

<SEO
  title="DesignHub v2 — AI-Powered Figma to SwiftUI Code Generation"
  description="Convert Figma mockups to production SwiftUI code in minutes — not days. Pixel-perfect, HIG-compliant, multi-platform. Interactive demo available."
  ogImage="https://westroadsouth.com/images/og-designhub.png"
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"DesignHub v2","applicationCategory":"DeveloperApplication","operatingSystem":"Web, macOS","description":"AI-powered Figma to SwiftUI code generation — converts design mockups to production-ready iOS code in minutes.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@id":"https://westroadsouth.com/#org"}}</script>'}
/>

<!-- Hero -->
<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white text-center">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wrs-pink/20 bg-wrs-pink/5 text-wrs-pink text-xs font-semibold uppercase tracking-widest mb-6">Product</span>
      <h1 class="text-3xl md:text-6xl font-bold text-wrs-ink mb-4">DesignHub v2</h1>
      <p class="text-xl text-wrs-pink font-medium mb-6">Design → Production Code in Minutes</p>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">Stop hand-coding SwiftUI from Figma. DesignHub v2 uses AI to convert your mockups into production-ready code — with proper modifiers, navigation, data bindings, and unit tests. What took days now takes minutes.</p>
    </ScrollReveal>
  </div>
</section>

<!-- Animated Demo -->
<section class="py-10 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <div class="flex justify-center gap-2 mb-8 flex-wrap">
      {#each screens as s, i}
        <button onclick={() => step = i} class="px-4 py-2 rounded-full text-xs font-semibold transition-all {step >= i ? 'bg-wrs-pink text-white' : 'bg-white text-wrs-gray border border-wrs-border'}">{i + 1}. {s}</button>
      {/each}
    </div>
    <div class="bg-white rounded-2xl border border-wrs-border shadow-sm overflow-hidden relative">
      <div class="aspect-[2/1] relative">
        <svg viewBox="0 0 800 400" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ds" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#E42869" stop-opacity="0"/><stop offset="50%" stop-color="#E42869" stop-opacity="0.4"/><stop offset="100%" stop-color="#E42869" stop-opacity="0"/><animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="2 0" dur="2.5s" repeatCount="indefinite"/></linearGradient>
          </defs>
          <!-- Left: Mockup -->
          <g opacity={step >= 0 ? 1 : 0.3}>
            <rect x="30" y="35" width="290" height="330" rx="16" fill="white" stroke="rgba(0,0,0,0.1)"/>
            <rect x="55" y="60" width="240" height="30" rx="6" fill="#FF9900" opacity="0.8"><animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite"/></rect>
            <rect x="55" y="110" width="190" height="12" rx="3" fill="rgba(0,0,0,0.12)"/>
            <rect x="55" y="134" width="220" height="12" rx="3" fill="rgba(0,0,0,0.08)"/>
            <rect x="55" y="158" width="155" height="12" rx="3" fill="rgba(0,0,0,0.06)"/>
            <rect x="55" y="195" width="120" height="65" rx="8" fill={step >= 1 ? 'rgba(228,40,105,0.12)' : 'rgba(0,0,0,0.03)'} stroke={step >= 1 ? '#E42869' : 'none'} stroke-width={step >= 1 ? 2 : 0} stroke-dasharray="6,3"/>
            <rect x="190" y="195" width="120" height="65" rx="8" fill="rgba(0,0,0,0.03)"/>
            <circle cx="70" cy="295" r="22" fill="rgba(0,0,0,0.05)"/>
            <rect x="105" y="283" width="180" height="10" rx="3" fill="rgba(0,0,0,0.08)"/>
            <rect x="105" y="302" width="130" height="10" rx="3" fill="rgba(0,0,0,0.05)"/>
          </g>
          <!-- Arrow -->
          <g opacity={step >= 1 ? 1 : 0.15}>
            <line x1="335" y1="200" x2="400" y2="200" stroke="#E42869" stroke-width="2" stroke-dasharray="8,4"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite"/></line>
            <polygon points="400,190 420,200 400,210" fill="#E42869"/>
          </g>
          <!-- Right: Code -->
          <g opacity={step >= 2 ? 1 : 0.2}>
            <rect x="450" y="35" width="320" height="330" rx="12" fill="#0d0d1a" stroke="rgba(255,255,255,0.1)"/>
            <rect x="450" y="35" width="320" height="28" rx="12" fill="rgba(255,255,255,0.03)"/>
            <circle cx="468" cy="49" r="5" fill="#FF5F56"/><circle cx="485" cy="49" r="5" fill="#FFBD2E"/><circle cx="502" cy="49" r="5" fill="#27C93F"/>
            <text x="620" y="53" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace" text-anchor="middle">ContentView.swift</text>
            <text x="475" y="90" fill="#FF9900" font-size="11" font-family="monospace" font-weight="bold">SwiftUI</text>
            <text x="475" y="115" fill={step >= 2 ? '#E42869' : 'rgba(255,255,255,0.1)'} font-size="11" font-family="monospace">import</text>
            <text x="500" y="115" fill="rgba(255,255,255,0.5)" font-size="11" font-family="monospace">SwiftUI</text>
            <text x="475" y="140" fill="rgba(255,255,255,0.4)" font-size="11" font-family="monospace">struct ContentView: View</text>
            <text x="475" y="165" fill="rgba(255,255,255,0.4)" font-size="11" font-family="monospace">  var body: some View {'{'}</text>
            <text x="475" y="190" fill="rgba(255,255,255,0.4)" font-size="11" font-family="monospace">    NavigationStack {'{'}</text>
            <text x="475" y="215" fill={step >= 2 ? '#6BA4F0' : 'rgba(255,255,255,0.08)'} font-size="11" font-family="monospace">      VStack(spacing: 16) {'{'}</text>
            <text x="475" y="240" fill="rgba(255,255,255,0.3)" font-size="11" font-family="monospace">        HeaderView()</text>
            <text x="475" y="265" fill={step >= 3 ? '#44CC66' : 'rgba(255,255,255,0.08)'} font-size="11" font-family="monospace">        ContentList()</text>
            {#if step >= 2}<rect x="515" y="255" width="1.5" height="13" fill="#E42869"><animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite"/></rect>{/if}
          </g>
        </svg>
      </div>
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <button onclick={playDemo} disabled={playing} class="px-6 py-2.5 bg-wrs-pink text-white rounded-full text-sm font-semibold hover:bg-wrs-pink-hover disabled:opacity-50">{playing ? 'Playing...' : '▶ Play Demo'}</button>
        <button onclick={resetDemo} class="px-6 py-2.5 border border-wrs-border rounded-full text-sm text-wrs-gray hover:border-wrs-pink hover:text-wrs-pink">↺ Reset</button>
      </div>
    </div>
  </div>
</section>

<!-- Benefits -->
<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">Why Teams Choose DesignHub</h2><p class="text-wrs-gray text-center mb-12 max-w-xl mx-auto">From indie developers to enterprise teams — here's what DesignHub unlocks.</p></ScrollReveal>
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

<!-- How we help -->
<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">How We Help</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">Our consultants make DesignHub work for your team</h2>
      <p class="text-wrs-gray text-center mb-12 max-w-xl mx-auto">Technology alone isn't enough. We ensure DesignHub integrates with your workflow, your design system, and your CI/CD pipeline.</p>
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
      <a href="/demo/researchvault" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">Research Vault</h3>
        <p class="text-xs text-wrs-gray">AI-powered market research</p>
      </a>
      <a href="/demo/avionone" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">AvionOne</h3>
        <p class="text-xs text-wrs-gray">AI companion for iPhone</p>
      </a>
      <a href="/services" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">Our Services</h3>
        <p class="text-xs text-wrs-gray">How we help you adopt these tools</p>
      </a>
    </div>
  </div>
</section>
<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center"><div class="max-w-xl mx-auto"><ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Ship SwiftUI 10x faster</h2><p class="text-gray-400 mb-8">Book a consultation. We'll analyze your Figma workflow and show you exactly how DesignHub fits.</p><a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover">Get Started →</a></ScrollReveal></div></section>