<script>
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  let allServices = [
    {
      icon: '🤖',
      title: 'AI Agent Development',
      tagline: 'Custom autonomous agents for complex workflows',
      overview: 'We design, build, and deploy AI agents that handle multi-step business processes autonomously. Each agent is purpose-built — trained on your data, integrated with your tools, and deployed to your infrastructure.',
      features: [
        'Custom agent architecture design',
        'Integration with existing APIs and databases',
        'Human-in-the-loop fallback mechanisms',
        'Real-time monitoring and observability',
        'Gradual rollout with A/B testing',
        'On-premise or cloud deployment options'
      ],
      outcomes: 'Typical results: 40-60% reduction in manual processing time, 90%+ accuracy on routine decisions, full audit trail for compliance.'
    },
    {
      icon: '⚡',
      title: 'Work Process Optimization',
      tagline: 'End-to-end operational automation',
      overview: 'We map your existing workflows, identify every bottleneck, and deploy AI agents at each friction point. The result: processes that used to take days now complete in minutes — with fewer errors and full traceability.',
      features: [
        'As-is workflow analysis and documentation',
        'Bottleneck identification with cost quantification',
        'AI agent placement at decision points',
        'Parallel processing for batch operations',
        'Exception handling and escalation routing',
        'Continuous improvement with KPI tracking'
      ],
      outcomes: 'Typical results: 50-70% faster cycle times, 80% reduction in data entry errors, 3-6 month ROI for most implementations.'
    },
    {
      icon: '💬',
      title: 'Agent-Powered Customer Service',
      tagline: 'Intelligent support, 24/7, at scale',
      overview: 'Our conversational AI agents handle support inquiries, qualify leads, and resolve issues autonomously. They understand context, access your knowledge base, and escalate only when necessary — all while learning from every interaction.',
      features: [
        'Multi-channel deployment (chat, email, voice)',
        'Knowledge base integration and RAG',
        'Sentiment-aware escalation',
        'Multilingual support out of the box',
        'CRM and helpdesk integration',
        'Continuous learning from resolved tickets'
      ],
      outcomes: 'Typical results: 70%+ first-contact resolution, 60% reduction in support tickets, CSAT scores maintained or improved.'
    },
    {
      icon: '🔧',
      title: 'AI Infrastructure & Integration',
      tagline: 'The platform underneath your agents',
      overview: 'Building AI agents is one thing. Running them reliably in production is another. We handle model selection, fine-tuning, deployment, monitoring, security, and cost optimization — so your team can focus on business outcomes.',
      features: [
        'Model selection and vendor evaluation',
        'Fine-tuning on your proprietary data',
        'SOC 2-compliant deployment architecture',
        'Usage monitoring and cost controls',
        'Failover and redundancy design',
        'Ongoing maintenance and model updates'
      ],
      outcomes: 'Typical results: 99.9% uptime SLA, predictable per-transaction costs, full security compliance for regulated industries.'
    },
    {
      icon: '📊',
      title: 'Data Pipeline Automation',
      tagline: 'Intelligent ETL with AI at the edge cases',
      overview: 'Traditional ETL breaks on unstructured data, exceptions, and edge cases. Our AI-powered pipelines handle the 20% of data that traditional automation misses — extracting, classifying, and routing information that would otherwise require manual review.',
      features: [
        'Unstructured data extraction (PDF, email, images)',
        'Intelligent classification and routing',
        'Exception handling with confidence scoring',
        'Real-time and batch processing modes',
        'Schema inference for unknown data formats',
        'Integration with existing data warehouses'
      ],
      outcomes: 'Typical results: 90%+ reduction in manual data entry, 99.5% classification accuracy, real-time processing at scale.'
    },
    {
      icon: '🎯',
      title: 'AI Strategy & Consulting',
      tagline: 'Know where to start — and what comes next',
      overview: 'Not every process needs AI. We help you separate signal from noise — identifying the highest-ROI opportunities, building a phased roadmap, and guiding your team from proof-of-concept to full production deployment.',
      features: [
        'AI readiness assessment',
        'Opportunity identification and ROI modeling',
        'Phased implementation roadmap',
        'Build vs. buy analysis',
        'Team upskilling and change management',
        'Vendor evaluation and selection support'
      ],
      outcomes: 'Typical results: Clear 12-24 month AI roadmap, 3-5x ROI on first deployment, internal team capable of maintaining and extending agents.'
    }
  ];
</script>

<svelte:head>
  <title>Services — WestRoadSouth</title>
</svelte:head>

<section class="py-24 md:py-32 px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Our Services</p>
      <h1 class="text-4xl md:text-5xl font-bold text-wrs-ink mb-6">AI solutions built for business outcomes</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed">
        Every engagement starts with a single question: what problem are we solving? From there, we design, build, and deploy — measuring results against business KPIs, not AI benchmarks.
      </p>
    </ScrollReveal>
  </div>
</section>

<section class="py-24 px-6">
  <div class="max-w-5xl mx-auto space-y-20">
    {#each allServices as svc, i}
      <ScrollReveal>
        <div class="grid md:grid-cols-[100px_1fr] gap-8 items-start">
          <div class="hidden md:flex w-16 h-16 rounded-xl bg-wrs-pink/10 items-center justify-center text-3xl">{svc.icon}</div>
          <div>
            <div class="md:hidden text-3xl mb-4">{svc.icon}</div>
            <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-2">{svc.title}</h2>
            <p class="text-wrs-pink font-semibold mb-4">{svc.tagline}</p>
            <p class="text-wrs-gray leading-relaxed mb-6">{svc.overview}</p>

            <div class="grid md:grid-cols-2 gap-3 mb-6">
              {#each svc.features as feat}
                <div class="flex items-start gap-2 text-sm text-wrs-ink">
                  <span class="text-wrs-pink mt-0.5 shrink-0">✓</span>
                  <span>{feat}</span>
                </div>
              {/each}
            </div>

            <div class="bg-wrs-off-white rounded-lg p-5 border border-wrs-border">
              <p class="text-sm text-wrs-ink font-semibold mb-1">Expected outcomes</p>
              <p class="text-sm text-wrs-gray">{svc.outcomes}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {#if i < allServices.length - 1}
        <hr class="border-wrs-border" />
      {/if}
    {/each}
  </div>
</section>

<section class="py-20 px-6 bg-wrs-ink text-center">
  <div class="max-w-2xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
      <p class="text-gray-300 mb-8">Book a free 30-minute consultation. We'll assess your workflows and identify the highest-ROI automation opportunities.</p>
      <a href="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-colors">
        Schedule a Call <span>→</span>
      </a>
    </ScrollReveal>
  </div>
</section>
