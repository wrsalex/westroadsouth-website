<script>
  let services = [
    {
      title: 'AI Agent Development',
      desc: 'Custom AI agents that automate complex workflows, handle customer interactions, and make decisions in real time. Built on proven agent runtimes, deployed to your infrastructure.',
      icon: '🤖'
    },
    {
      title: 'Work Process Optimization',
      desc: 'We analyze your existing workflows, identify bottlenecks, and deploy AI agents to streamline operations. From document processing to data entry to decision support — automated end to end.',
      icon: '⚡'
    },
    {
      title: 'Agent-Powered Customer Service',
      desc: 'Conversational AI agents that handle support tickets, qualify leads, and resolve issues without human escalation. Multilingual, 24/7, integrated with your existing tools.',
      icon: '💬'
    },
    {
      title: 'AI Integration & Infrastructure',
      desc: 'End-to-end AI infrastructure — from model selection and fine-tuning to deployment, monitoring, and continuous improvement. Secure, scalable, SOC 2-ready architecture.',
      icon: '🔧'
    },
    {
      title: 'Data Pipeline Automation',
      desc: 'Intelligent data pipelines that extract, transform, and route information across your systems. AI agents handle the edge cases that traditional ETL misses.',
      icon: '📊'
    },
    {
      title: 'AI Strategy & Consulting',
      desc: 'Not sure where to start? We assess your business, identify high-ROI AI opportunities, and build a phased roadmap. From proof-of-concept to full production deployment.',
      icon: '🎯'
    }
  ];

  let stats = [
    { value: '50+', label: 'AI Agents Deployed' },
    { value: '12+', label: 'Years in Business' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Retention' }
  ];
</script>

<!-- Hero -->
<section class="py-28 md:py-36 px-6">
  <div class="max-w-4xl mx-auto">
    <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-6">
      AI Agent Services
    </p>
    <h1 class="text-4xl md:text-6xl font-bold text-wrs-ink leading-tight mb-6">
      Intelligent Automation<br>for Modern Business
    </h1>
    <p class="text-lg md:text-xl text-wrs-gray leading-relaxed max-w-2xl mb-10">
      We build and deploy AI agents that transform how your business operates —
      automating workflows, optimizing processes, and scaling intelligence across your organization.
    </p>
    <div class="flex flex-wrap gap-4">
      <a href="#contact" class="inline-block px-8 py-3.5 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-colors duration-200">
        Start Your AI Journey
      </a>
      <a href="#services" class="inline-block px-8 py-3.5 border-2 border-wrs-pink text-wrs-pink font-semibold rounded hover:bg-wrs-pink hover:text-white transition-colors duration-200">
        Our Services
      </a>
    </div>
  </div>
</section>

<!-- Stats Bar -->
<section class="py-14 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {#each stats as stat}
        <div>
          <div class="text-3xl md:text-4xl font-bold text-wrs-ink mb-1">{stat.value}</div>
          <div class="text-sm text-wrs-gray uppercase tracking-wider">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Services -->
<section id="services" class="py-24 md:py-28 px-6">
  <div class="max-w-5xl mx-auto">
    <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">What We Do</p>
    <h2 class="text-3xl md:text-4xl font-bold text-wrs-ink mb-16">AI Agent Services</h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as svc}
        <div class="group p-8 rounded-lg border border-wrs-border bg-white hover:border-wrs-pink transition-colors duration-200">
          <div class="text-3xl mb-5">{svc.icon}</div>
          <h3 class="text-lg font-semibold text-wrs-ink mb-3">{svc.title}</h3>
          <p class="text-sm text-wrs-gray leading-relaxed">{svc.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Process -->
<section class="py-24 md:py-28 px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">How We Work</p>
    <h2 class="text-3xl md:text-4xl font-bold text-wrs-ink mb-16">From Assessment to Autonomous Operation</h2>

    <div class="grid md:grid-cols-4 gap-6">
      {#each [
        { step: '01', title: 'Discover', desc: 'We audit your workflows, identify automation opportunities, and quantify the ROI of each.' },
        { step: '02', title: 'Design', desc: 'We architect the agent pipeline — models, tools, integrations, and human-in-the-loop fallbacks.' },
        { step: '03', title: 'Deploy', desc: 'Agents go live in your environment with monitoring, logging, and gradual roll-out controls.' },
        { step: '04', title: 'Optimize', desc: 'Continuous feedback loops improve agent performance. Monthly review of KPIs and cost efficiency.' }
      ] as phase}
        <div class="text-center md:text-left">
          <div class="text-wrs-pink text-3xl font-bold mb-3">{phase.step}</div>
          <h3 class="text-lg font-semibold text-wrs-ink mb-2">{phase.title}</h3>
          <p class="text-sm text-wrs-gray leading-relaxed">{phase.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section id="contact" class="py-24 md:py-32 px-6 bg-wrs-ink">
  <div class="max-w-3xl mx-auto text-center">
    <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Let's Talk</p>
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate?</h2>
    <p class="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
      Tell us about your business and we'll show you what AI agents can do. No jargon, no hard sell — just a practical conversation about automation.
    </p>
    <a href="mailto:alex@westroadsouth.com" class="inline-block px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-colors duration-200 text-lg">
      Get in Touch
    </a>
  </div>
</section>

<!-- Footer -->
<footer class="py-10 px-6 bg-wrs-ink border-t border-gray-800">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="text-sm text-gray-400">&copy; {new Date().getFullYear()} West Road South. All rights reserved.</p>
    <div class="flex gap-6 text-sm text-gray-400">
      <a href="mailto:alex@westroadsouth.com" class="hover:text-wrs-pink transition-colors">Contact</a>
      <button class="hover:text-wrs-pink transition-colors">Privacy</button>
      <button class="hover:text-wrs-pink transition-colors">Terms</button>
    </div>
  </div>
</footer>
