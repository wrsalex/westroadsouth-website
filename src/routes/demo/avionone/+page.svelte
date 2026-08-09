1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  let mode = $state<'listen'|'think'|'speak'>('listen');
  let messages = $state<{role:string,text:string}[]>([]);
  let demoStarted = $state(false);

  const presetMessages = [
    { role: 'user', text: 'Hey Avion, summarize my last session.' },
    { role: 'agent', text: `Your last session covered the WRS website redesign. You built a contact page with reCAPTCHA, a products showcase, and added i18n support for English, Traditional Chinese, and Simplified Chinese. 3 commits, 11 files changed.` },
    { role: 'user', text: 'Any bugs I should know about?' },
    { role: 'agent', text: `The services section had a broken i18n key — fixed in the last deploy. Also, your Mac still has the Tailscale DNS issue with .workers.dev domains. Everything else is clean.` },
  ];

  async function startDemo() {
    demoStarted = true; mode = 'listen';
    await new Promise(r => setTimeout(r, 1200));
    for (let i = 0; i < presetMessages.length; i++) {
      mode = 'listen'; messages = [...messages, presetMessages[i]];
      await new Promise(r => setTimeout(r, 1500));
      if (i < presetMessages.length - 1) { mode = 'think'; await new Promise(r => setTimeout(r, 800)); mode = 'speak'; }
    }
    mode = 'listen';
  }

  const benefits = [
    { icon: '🧠', title: 'Persistent Memory', desc: `Avion remembers every project, decision, and conversation. Ask "what did we decide about the API auth?" — and get the exact answer from weeks ago.` },
    { icon: '🎙️', title: 'Always Listening', desc: `No typing required. Avion listens in the background, ready to help when you speak. Perfect for coding, driving, or when your hands are full.` },
    { icon: '🌐', title: 'Bilingual by Design', desc: `Avion speaks English and Cantonese natively. It understands Hong Kong context — local references, bilingual code-switching, and cultural nuances.` },
    { icon: '🔌', title: 'Your Tools, Connected', desc: `Avion integrates with your stack — Supabase, GitHub, Cloudflare, Telegram. It can deploy code, query databases, and manage infrastructure.` },
    { icon: '🛡️', title: 'Privacy First', desc: `Your API keys stay on your device. Avion's HYOK architecture means the proxy never sees your credentials. Your data, your control.` },
    { icon: '📱', title: 'iPhone Native', desc: `Built in SwiftUI for iOS. Avion lives on your phone — always with you, always ready. No cloud dependency for core functions.` }
  ];

  const consulting = [
    { title: 'Personal Agent Configuration', desc: `We configure Avion for your specific workflow — setting up integrations, custom skills, and memory systems tailored to how you work.` },
    { title: 'Enterprise Agent Deployment', desc: `For teams: we deploy Avion across your organization with shared memory, role-based access, and centralized administration.` },
    { title: 'Custom Skill Development', desc: `Need Avion to do something specific? We build custom skills — from CRM integration to inventory management to compliance monitoring.` },
    { title: 'Infrastructure Setup', desc: `We deploy the full Avion stack — ACRN Engine, Ascend Memory, and the iOS app — on your infrastructure with enterprise security.` }
  ];
</script>

<SEO
  title="AvionOne — Always-On AI Companion for iPhone with Persistent Memory"
  description="Your iPhone has an AI. Speech recognition, TTS, visualizer, and persistent memory. Built on ACRN Engine + Ascend memory architecture. See the interactive demo."
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"SoftwareApplication","name":"AvionOne","applicationCategory":"LifestyleApplication","operatingSystem":"iOS","description":"Always-on AI companion for iPhone — speech recognition, TTS, living visualizer, and persistent memory with HYOK architecture.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@id":"https://westroadsouth.com/#org"}}</script>'}
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white text-center">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-wrs-pink/20 bg-wrs-pink/5 text-wrs-pink text-xs font-semibold uppercase tracking-widest mb-6">Product</span>
      <h1 class="text-3xl md:text-6xl font-bold text-wrs-ink mb-4">AvionOne</h1>
      <p class="text-xl text-wrs-pink font-medium mb-6">Your iPhone Has an AI</p>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">AvionOne is an always-on AI companion that lives on your iPhone. Speech recognition, text-to-speech, a living visualizer, persistent memory, and deep integrations — all running locally with HYOK (Hold Your Own Key) architecture.</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-10 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-2xl mx-auto">
    <div class="bg-[#0a0a0f] rounded-[3rem] p-4 border border-white/[0.08] shadow-2xl mx-auto max-w-[340px]">
      <div class="w-24 h-6 bg-black rounded-b-2xl mx-auto mb-3"></div>
      <div class="bg-[#0d0d1a] rounded-2xl p-4 min-h-[500px] relative overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="w-32 h-32 rounded-full border border-[#FF9900]/20 animate-ping" style="animation-duration:3s"></div>
          <div class="w-24 h-24 rounded-full border border-[#FF9900]/30 animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style="animation-duration:2.5s;animation-delay:0.5s"></div>
          <div class="w-16 h-16 rounded-full border border-[#FF9900]/40 animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style="animation-duration:2s;animation-delay:1s"></div>
          <div class="w-4 h-4 rounded-full bg-[#FF9900] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#FF9900]"></div>
        </div>
        <div class="relative z-10 text-center mt-4">
          <span class="text-[10px] font-mono uppercase tracking-wider {mode==='listen'?'text-[#44CC66]':mode==='think'?'text-[#FF9900]':'text-[#6BA4F0]'}">{mode==='listen'?'● Listening':mode==='think'?'◉ Thinking':'◉ Speaking'}</span>
        </div>
        <div class="relative z-10 mt-6 space-y-3">
          {#each messages as msg}
            <div class="flex {msg.role==='user'?'justify-end':'justify-start'}"><div class="max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-relaxed {msg.role==='user'?'bg-[#FF9900]/20 text-white/80':'bg-white/[0.05] text-white/70 border border-white/[0.06]'}">{msg.text}</div></div>
          {/each}
        </div>
        {#if !demoStarted}
          <div class="absolute inset-0 flex items-center justify-center z-20"><button onclick={startDemo} class="px-8 py-3 bg-[#FF9900] text-white rounded-full font-semibold text-sm hover:bg-[#FFB84D] transition-all shadow-[0_0_30px_rgba(255,153,0,0.3)]">▶ Start Demo</button></div>
        {/if}
      </div>
      <div class="w-20 h-1 bg-white/20 rounded-full mx-auto mt-3"></div>
    </div>
    <p class="text-center mt-6 text-sm text-wrs-gray">{mode==='listen'?'Avion is always listening, ready to help.':mode==='think'?'Processing with ACRN Engine + Ascend Memory.':'Responding via ElevenLabs TTS.'}</p>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">Why Users Choose AvionOne</h2><p class="text-wrs-gray text-center mb-12 max-w-xl mx-auto">More than a chatbot — AvionOne is a companion that remembers, reasons, and acts.</p></ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each benefits as b, i}
        <ScrollReveal delay={i * 80}>
          <div class="p-6 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300">
            <div class="text-2xl mb-3">{b.icon}</div><h3 class="font-bold text-wrs-ink mb-2">{b.title}</h3><p class="text-sm text-wrs-gray leading-relaxed">{b.desc}</p>
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
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-4 text-center">Our consultants deploy AvionOne for your team</h2>
      <p class="text-wrs-gray text-center mb-12 max-w-xl mx-auto">AvionOne is deeply customizable. We handle the setup so you get a production-ready AI companion from day one.</p>
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
      <a href="/demo/researchvault" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">Research Vault</h3>
        <p class="text-xs text-wrs-gray">AI research engine</p>
      </a>
      <a href="/about" class="group p-5 rounded-xl border border-wrs-border hover:border-wrs-pink/30 hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 class="font-semibold text-wrs-ink mb-1 group-hover:text-wrs-pink transition-colors">About Us</h3>
        <p class="text-xs text-wrs-gray">The team behind AvionOne</p>
      </a>
    </div>
  </div>
</section>
<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center"><div class="max-w-xl mx-auto"><ScrollReveal><h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Put AI in your pocket</h2><p class="text-gray-400 mb-8">AvionOne is available for teams and individuals. Book a setup consultation.</p><a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover">Get Early Access →</a></ScrollReveal></div></section>