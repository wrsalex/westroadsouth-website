<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
    import StatCounter from '$lib/components/StatCounter.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';

  const i18n = getI18n();

  let services = $derived((i18n.t('servicesItems') as any[]).slice(0, 3).map((s: any) => ({
    icon: s.icon, title: s.title, desc: s.desc
  })));

  let stats = $derived([
    { value: 50, suffix: '+', label: i18n.t('stats.agentsDeployed'), sub: i18n.t('stats.agentsDeployedSub') },
    { value: 12, suffix: '+', label: i18n.t('stats.yearsInBusiness'), sub: i18n.t('stats.yearsInBusinessSub') },
    { value: 200, suffix: '+', label: i18n.t('stats.projectsDelivered'), sub: i18n.t('stats.projectsDeliveredSub') },
    { value: 98, suffix: '%', label: i18n.t('stats.clientRetention'), sub: i18n.t('stats.clientRetentionSub') }
  ]);

  let trustLogos = ['Enterprise', 'SME', 'Startup', 'Gov', 'Finance'];

  let products = $derived([
    {
      name: 'DesignHub v2',
      tagline: i18n.t('products.dh2.tagline'),
      desc: i18n.t('products.dh2.desc'),
      stats: { label: i18n.t('products.dh2.stat'), value: '93+' },
      tech: ['SwiftUI', 'AI Code Gen', 'Cloudflare Workers', 'SvelteKit'],
      link: '/demo/designhub',
      color: '#E42869'
    },
    {
      name: 'Research Vault',
      tagline: i18n.t('products.rv.tagline'),
      desc: i18n.t('products.rv.desc'),
      stats: { label: i18n.t('products.rv.stat'), value: '10' },
      tech: ['Supabase', 'Hermes Agent', 'Knowledge Graph', 'SvelteKit'],
      link: '/demo/researchvault',
      color: '#FF9900'
    },
    {
      name: 'AvionOne',
      tagline: i18n.t('products.ao.tagline'),
      desc: i18n.t('products.ao.desc'),
      stats: { label: i18n.t('products.ao.stat'), value: '297+' },
      tech: ['SwiftUI', 'ACRN Engine', 'Ascend Memory', 'ElevenLabs TTS'],
      link: '/demo/avionone',
      color: '#6BA4F0'
    }
  ]);
</script>

<SEO
  title="AI Agent Development — Custom Agents That Do the Work"
  description="WestRoadSouth builds custom AI agents for complex workflows, process optimization, and enterprise automation. 50+ agents deployed. Based in Hong Kong, serving globally."
/>

<!-- Hero -->
<section class="relative overflow-hidden bg-wrs-ink">
  <!-- Background video -->
  <div class="absolute inset-0 z-0">
    <video autoplay muted loop playsinline class="w-full h-full object-cover opacity-30">
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-wrs-ink/50 to-wrs-white"></div>
  </div>
  <div class="max-w-6xl mx-auto px-6 py-20 md:py-40 relative z-10">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-wrs-pink/20 bg-wrs-pink/5 text-wrs-pink text-xs font-semibold uppercase tracking-widest mb-8">
        <span class="w-2 h-2 rounded-full bg-wrs-pink animate-pulse"></span>
        {i18n.t('hero.badge')}
      </div>
      <h1 class="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
        {i18n.t('hero.line1')}<br>
        <span class="text-wrs-pink">{i18n.t('hero.line2')}</span>
      </h1>
      <p class="text-base md:text-xl text-gray-300 leading-relaxed max-w-xl mb-8">{i18n.t('hero.desc')}</p>
      <div class="flex flex-wrap gap-4">
        <a href="/book" class="group inline-flex items-center gap-2 px-8 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all duration-200">
          {i18n.t('hero.cta1')}
          <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
        <a href="#products" class="inline-flex items-center gap-2 px-8 py-4 border-2 border-wrs-pink/30 text-white font-semibold rounded hover:bg-wrs-pink hover:text-white hover:border-wrs-pink transition-all duration-200">
          {i18n.t('hero.cta2')}
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Trust bar -->
<section class="border-y border-wrs-border bg-wrs-off-white">
  <div class="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-center md:justify-between gap-4">
    <span class="text-xs text-wrs-gray-light uppercase tracking-widest font-semibold">{i18n.t('trust.label')}</span>
    <div class="flex flex-wrap gap-6">
      {#each trustLogos as name}
        <span class="text-sm text-wrs-ink-dim font-semibold">{name}</span>
      {/each}
    </div>
  </div>
</section>

<!-- Stats -->
<section class="py-16 md:py-24 px-4 md:px-6">
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

<!-- Scorecard Promo -->
<section class="py-16 md:py-20 px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto">
    <div class="bg-wrs-ink rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
      <div class="flex-1">
        <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3">{i18n.t('scorecardPromo.label')}</p>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{i18n.t('scorecardPromo.heading')}</h2>
        <p class="text-gray-400 leading-relaxed mb-6">{i18n.t('scorecardPromo.desc')}</p>
        <a href="/scorecard" class="inline-flex items-center gap-2 px-8 py-4 bg-wrs-pink text-white font-semibold rounded-lg hover:bg-wrs-pink-hover transition-all">
          {i18n.t('scorecardPromo.cta')} <span>→</span>
        </a>
      </div>
      <div class="text-center">
        <div class="text-5xl mb-2">📊</div>
        <p class="text-gray-400 text-xs">7 questions · 2 minutes · Free</p>
      </div>
    </div>
  </div>
</section>

<!-- Services -->
<section id="services" class="py-24 md:py-28 px-6 bg-wrs-off-white">
  <div class="max-w-6xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('services.label')}</p>
      <h2 class="text-3xl md:text-4xl font-bold text-wrs-ink mb-4">{i18n.t('services.title')}</h2>
      <p class="text-wrs-gray max-w-2xl mb-14">{i18n.t('services.desc')}</p>
    </ScrollReveal>
    <div class="grid md:grid-cols-3 gap-8">
      {#each services as svc, i}
        <ScrollReveal delay={i * 150}>
          <a href="/services" class="group block p-8 rounded-lg border border-wrs-border bg-white hover:border-wrs-pink hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div class="text-3xl mb-5">{svc.icon}</div>
            <h3 class="text-lg font-semibold text-wrs-ink mb-3 group-hover:text-wrs-pink transition-colors">{svc.title}</h3>
            <p class="text-sm text-wrs-gray leading-relaxed mb-4">{svc.desc}</p>
            <span class="text-sm font-semibold text-wrs-pink group-hover:gap-2 flex items-center gap-1 transition-all">
              {i18n.t('services.learnMore')} <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </a>
        </ScrollReveal>
      {/each}
    </div>
    <ScrollReveal delay={300}>
      <div class="text-center mt-12">
        <a href="/services" class="inline-flex items-center gap-2 text-wrs-pink font-semibold hover:underline">{i18n.t('services.viewAll')} <span>→</span></a>
      </div>
    </ScrollReveal>
  </div>
</section>

<!-- Products Showcase -->
<section id="products" class="py-24 md:py-32 px-6 bg-wrs-ink relative overflow-hidden">
  <div class="absolute inset-0 opacity-[0.03]">
    <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, #E42869 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FF9900 1px, transparent 1px); background-size: 60px 60px;"></div>
  </div>
  <div class="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-10" style="background: #E42869;"></div>
  <div class="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[150px] opacity-10" style="background: #FF9900;"></div>

  <div class="max-w-6xl mx-auto relative z-10">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4 text-center">{i18n.t('products.label')}</p>
      <h2 class="text-3xl md:text-5xl font-bold text-white mb-4 text-center">{i18n.t('products.title')}</h2>
      <p class="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-16">{i18n.t('products.desc')}</p>
    </ScrollReveal>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {#each products as product, i}
        <ScrollReveal delay={i * 200}>
          <a href={product.link} target="_blank" rel="noopener"
            class="group block relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            
            <!-- Animated Mockup Area -->
            <div class="relative h-40 sm:h-48 md:h-52 overflow-hidden">
              {#if i === 0}
                <!-- DesignHub: Mockup → Code -->
                <svg viewBox="0 0 400 200" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="scan-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stop-color="#E42869" stop-opacity="0"/><stop offset="50%" stop-color="#E42869" stop-opacity="0.3"/><stop offset="100%" stop-color="#E42869" stop-opacity="0"/>
                      <animateTransform attributeName="gradientTransform" type="translate" from="-1 0" to="2 0" dur="2s" repeatCount="indefinite"/>
                    </linearGradient>
                  </defs>
                  <!-- Phone mockup left -->
                  <rect x="20" y="25" width="110" height="150" rx="12" fill="#1a1a2e" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
                  <rect x="30" y="45" width="90" height="12" rx="3" fill="#FF9900" opacity="0.6"><animate attributeName="opacity" values="0.6;0.8;0.6" dur="2s" repeatCount="indefinite"/></rect>
                  <rect x="30" y="65" width="70" height="6" rx="2" fill="rgba(255,255,255,0.2)"/>
                  <rect x="30" y="78" width="85" height="6" rx="2" fill="rgba(255,255,255,0.15)"/>
                  <rect x="30" y="91" width="60" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="130" cy="160" r="8" fill="#E42869" opacity="0.3"><animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite"/></circle>
                  <!-- Arrow -->
                  <polygon points="155,90 175,80 175,85 210,85 210,95 175,95 175,100" fill="#E42869" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.2s" repeatCount="indefinite"/></polygon>
                  <!-- Code right -->
                  <rect x="220" y="25" width="155" height="150" rx="8" fill="#0d0d1a" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                  <text x="234" y="50" fill="#FF9900" font-size="8" font-family="monospace" opacity="0.7">SwiftUI</text>
                  <rect x="234" y="60" width="80" height="4" rx="2" fill="#E42869" opacity="0.4"><animate attributeName="width" values="80;110;80" dur="3s" repeatCount="indefinite"/></rect>
                  <rect x="234" y="72" width="60" height="4" rx="2" fill="rgba(255,255,255,0.15)"><animate attributeName="opacity" values="0.15;0.3;0.15" dur="2.5s" repeatCount="indefinite"/></rect>
                  <rect x="234" y="84" width="95" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
                  <rect x="234" y="96" width="45" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                  <rect x="234" y="112" width="70" height="4" rx="2" fill="rgba(255,255,255,0.12)"><animate attributeName="opacity" values="0.12;0.25;0.12" dur="2.8s" repeatCount="indefinite"/></rect>
                  <rect x="234" y="124" width="55" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                  <circle cx="340" cy="160" r="6" fill="#E42869" opacity="0"><animate attributeName="opacity" values="0;0.5;0" dur="2s" repeatCount="indefinite"/></circle>
                  <!-- Scan line -->
                  <rect x="25" y="25" width="345" height="2" fill="url(#scan-grad)" opacity="0.4"/>
                </svg>
              {:else if i === 1}
                <!-- Research Vault: Knowledge Graph -->
                <svg viewBox="0 0 400 200" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <!-- Center node -->
                  <circle cx="200" cy="100" r="14" fill="#FF9900" opacity="0.9"><animate attributeName="r" values="14;16;14" dur="2s" repeatCount="indefinite"/></circle>
                  <text x="200" y="104" fill="white" text-anchor="middle" font-size="7" font-family="monospace" font-weight="bold">RV</text>
                  <!-- Orbiting nodes -->
                  <circle cx="130" cy="50" r="6" fill="#E42869" opacity="0.7"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite"/></circle>
                  <line x1="188" y1="88" x2="135" y2="55" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"><animate attributeName="opacity" values="0.08;0.2;0.08" dur="2.2s" repeatCount="indefinite"/></line>
                  
                  <circle cx="280" cy="55" r="6" fill="#6BA4F0" opacity="0.7"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.4s" repeatCount="indefinite"/></circle>
                  <line x1="212" y1="90" x2="275" y2="58" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"><animate attributeName="opacity" values="0.1;0.2;0.1" dur="1.9s" repeatCount="indefinite"/></line>
                  
                  <circle cx="110" cy="130" r="5" fill="#44CC66" opacity="0.6"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite"/></circle>
                  <line x1="188" y1="106" x2="114" y2="127" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
                  
                  <circle cx="250" cy="140" r="5" fill="#E42869" opacity="0.6"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.1s" repeatCount="indefinite"/></circle>
                  <line x1="210" y1="110" x2="246" y2="136" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>
                  
                  <circle cx="170" cy="155" r="4" fill="#FFAA00" opacity="0.5"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/></circle>
                  <line x1="193" y1="113" x2="172" y2="152" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                  
                  <circle cx="310" cy="120" r="4" fill="#6BA4F0" opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite"/></circle>
                  <line x1="212" y1="104" x2="307" y2="118" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                  
                  <circle cx="90" cy="80" r="4" fill="#FF9900" opacity="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.2s" repeatCount="indefinite"/></circle>
                  <line x1="188" y1="93" x2="93" y2="82" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>
                  
                  <!-- New nodes appearing -->
                  <circle cx="340" cy="60" r="0" fill="#FF9900" opacity="0"><animate attributeName="r" values="0;5;0" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite"/></circle>
                  <circle cx="60" cy="110" r="0" fill="#E42869" opacity="0"><animate attributeName="r" values="0;4;0" dur="3.5s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0;0.5;0" dur="3.5s" repeatCount="indefinite" begin="1s"/></circle>
                </svg>
              {:else}
                <!-- AvionOne: iPhone with breathing visualizer -->
                <svg viewBox="0 0 400 200" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="viz-glow">
                      <stop offset="0%" stop-color="#FF9900" stop-opacity="0.15"/><stop offset="100%" stop-color="transparent"/>
                    </radialGradient>
                  </defs>
                  <!-- iPhone frame -->
                  <rect x="140" y="8" width="120" height="184" rx="18" fill="#0a0a0f" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
                  <!-- Notch -->
                  <rect x="170" y="16" width="60" height="14" rx="7" fill="#0a0a0f" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                  <!-- Screen -->
                  <rect x="148" y="40" width="104" height="144" rx="4" fill="#0d0d1a"/>
                  
                  <!-- Visualizer: breathing rings -->
                  <circle cx="200" cy="112" r="30" fill="none" stroke="#FF9900" stroke-width="0.8" opacity="0"><animate attributeName="r" values="10;45;10" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite"/></circle>
                  <circle cx="200" cy="112" r="30" fill="none" stroke="#FF9900" stroke-width="0.6" opacity="0"><animate attributeName="r" values="10;45;10" dur="4s" repeatCount="indefinite" begin="1s"/><animate attributeName="opacity" values="0.4;0;0.4" dur="4s" repeatCount="indefinite" begin="1s"/></circle>
                  <circle cx="200" cy="112" r="30" fill="none" stroke="#FF9900" stroke-width="0.4" opacity="0"><animate attributeName="r" values="10;45;10" dur="4s" repeatCount="indefinite" begin="2s"/><animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" begin="2s"/></circle>
                  
                  <!-- Core particle -->
                  <circle cx="200" cy="112" r="4" fill="#FF9900"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/></circle>
                  <circle cx="200" cy="112" r="8" fill="url(#viz-glow)" opacity="0.8"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/></circle>
                  
                  <!-- Orbiting particles -->
                  <circle cx="200" cy="85" r="1.5" fill="#FFB84D" opacity="0"><animate attributeName="cx" values="200;230;200" dur="3s" repeatCount="indefinite"/><animate attributeName="cy" values="112;112;112" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/></circle>
                  <circle cx="200" cy="112" r="1" fill="#FF9900" opacity="0"><animate attributeName="cx" values="200;170;200" dur="2.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="cy" values="112;112;112" dur="2.5s" repeatCount="indefinite" begin="0.5s"/><animate attributeName="opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/></circle>
                  
                  <!-- Status bar text -->
                  <text x="200" y="28" fill="white" text-anchor="middle" font-size="6" font-family="monospace" opacity="0.6">AvionOne</text>
                </svg>
              {/if}
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <!-- Content -->
            <div class="px-8 pb-8">
              <div class="w-3 h-3 rounded-full mb-4 transition-all duration-500 group-hover:scale-150" style="background: {product.color};"></div>
              <h3 class="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p class="text-sm font-medium mb-4" style="color: {product.color}; opacity: 0.8;">{product.tagline}</p>
              <p class="text-gray-400 text-sm leading-relaxed mb-6">{product.desc}</p>
              <div class="flex items-center gap-3 mb-6 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                <span class="text-2xl font-bold text-white">{product.stats.value}</span>
                <span class="text-xs text-gray-500">{product.stats.label}</span>
              </div>
              <div class="flex flex-wrap gap-2 mb-2">
                {#each product.tech as tech}
                  <span class="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 font-mono group-hover:border-white/[0.1] transition-colors duration-300">{tech}</span>
                {/each}
              </div>
              <span class="text-sm font-semibold flex items-center gap-1 transition-all duration-300 group-hover:gap-2 mt-4" style="color: {product.color};">
                {i18n.t('products.viewProject')}
                <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </a>
        </ScrollReveal>
      {/each}
    </div>

    <ScrollReveal delay={600}>
      <div class="text-center mt-16">
        <a href="/book" class="inline-flex items-center gap-2 px-6 py-3 bg-wrs-pink text-white rounded-full text-sm font-semibold hover:bg-wrs-pink-hover transition-all duration-300">
          {i18n.t('products.workWithUs')}
          <span class="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </ScrollReveal>
  </div>
</section>

<!-- CTA -->
<section id="cta" class="py-24 md:py-32 px-6 bg-wrs-ink relative overflow-hidden">
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
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('cta.label')}</p>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{i18n.t('cta.title')}</h2>
      <p class="text-lg text-gray-300 leading-relaxed mb-10">{i18n.t('cta.desc')}</p>
      <a href="/book" class="group inline-flex items-center gap-2 px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all duration-200 text-lg">
        {i18n.t('cta.button')}
        <span class="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
