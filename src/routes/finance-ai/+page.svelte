<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title="AI Agents for Financial Compliance & Operations"
  description="Custom AI agents for compliance monitoring, KYC processing, fraud detection alerts, and transaction reconciliation. Deployed in weeks, not quarters. Hong Kong-based, global reach."
  ogType="website"
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Industry Solution</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6 speakable-heading">AI Agents for Financial Compliance &amp; Operations</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed speakable-summary">Purpose-built AI agents that automate financial operations — from KYC processing and compliance monitoring to fraud detection and regulatory reporting. Deployed across Hong Kong, Singapore, and global financial hubs.</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">What We Automate</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-12 text-center">Financial workflows our AI agents handle</h2>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each [
        {icon: '🔍', title: 'KYC Document Processing', desc: 'Auto-extract and validate identity documents, proof of address, and corporate structures. Cuts onboarding from days to hours with full audit trail.'},
        {icon: '📋', title: 'Compliance Monitoring', desc: 'Real-time transaction screening against sanctions lists, PEP databases, and adverse media. Automated SAR/STR drafting for regulator submission.'},
        {icon: '🔗', title: 'Transaction Reconciliation', desc: 'Cross-system matching of trades, payments, and ledger entries across core banking, payment rails, and custodian feeds. Eliminates manual spreadsheet work.'},
        {icon: '🚨', title: 'Fraud Detection Alerts', desc: 'Pattern-based anomaly detection across transaction streams. Escalates high-confidence alerts to compliance team with full context and evidence chain.'},
        {icon: '📊', title: 'Regulatory Reporting', desc: 'Auto-generate HKMA, SFC, and MAS regulatory filings from system data. Version-controlled submissions with approval workflow built in.'},
        {icon: '📈', title: 'Portfolio Monitoring', desc: 'Automated daily monitoring of investment portfolios against mandate constraints, risk limits, and concentration rules. Breach alerts within minutes.'}
      ] as item, i}
        <ScrollReveal delay={i * 100}>
          <div class="bg-white rounded-xl p-6 border border-wrs-border hover:border-wrs-pink/30 transition-all h-full">
            <div class="text-2xl mb-3">{item.icon}</div>
            <h3 class="font-semibold text-wrs-ink mb-2">{item.title}</h3>
            <p class="text-sm text-wrs-gray leading-relaxed">{item.desc}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">Case Study</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-10 text-center">83% faster KYC — customer onboarding from 4 days to 4 hours</h2>
    </ScrollReveal>
    <div class="bg-wrs-off-white rounded-2xl border border-wrs-border p-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">640</div>
          <div class="text-sm text-wrs-gray">Staff-hours saved/month</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">83%</div>
          <div class="text-sm text-wrs-gray">Faster KYC processing</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">4 weeks</div>
          <div class="text-sm text-wrs-gray">Time to production</div>
        </div>
      </div>
      <p class="text-wrs-gray leading-relaxed text-center max-w-xl mx-auto">A Hong Kong-based fintech processing 2,000+ customer applications monthly. Our AI agent now handles document extraction, identity verification, and sanctions screening — reducing KYC processing from 4 days to 4 hours while maintaining full regulatory compliance with HKMA and SFC requirements.</p>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center">
  <div class="max-w-xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Automate Your Financial Operations</h2>
      <p class="text-gray-400 mb-8">Book a free 15-minute assessment. We'll analyze your compliance and operations workflows and identify the highest-ROI automation opportunities.</p>
      <a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover transition-all">Book a Free Assessment →</a>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-8 text-center">Frequently Asked Questions</h2>
    <div class="space-y-3">
      {#each [
        {q: 'How do your AI agents handle financial compliance and data security?', a: 'All agents run within your infrastructure or our SOC 2-compliant Hong Kong cloud. PII is redacted at ingestion, audit logs are immutable, and every action is explainable. We support MAS, HKMA, and SFC regulatory frameworks.'},
        {q: 'What financial systems can your agents integrate with?', a: 'Core banking (Temenos, Finacle), payment rails (SWIFT, FPS), KYC platforms (WorldCheck, Refinitiv), ERP (SAP, Oracle), and custom ledgers. Integration via API, SFTP, or screen-level automation for legacy systems.'},
        {q: 'How quickly can a compliance AI agent go live?', a: 'KYC document processing: 2-3 weeks PoC. Full compliance suite (transaction monitoring + fraud detection + regulatory reporting): 8-10 weeks. We deploy incrementally — you see results from week 3.'}
      ] as faq, i}
        <details class="group bg-wrs-off-white rounded-xl border border-wrs-border hover:border-wrs-pink/20 transition-all">
          <summary class="px-5 py-4 cursor-pointer list-none flex items-center justify-between gap-3">
            <span class="text-wrs-ink font-semibold text-sm">{faq.q}</span>
            <svg class="w-4 h-4 text-wrs-pink flex-shrink-0 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          </summary>
          <div class="px-5 pb-4 text-wrs-gray text-sm leading-relaxed">{faq.a}</div>
        </details>
      {/each}
    </div>
  </div>
</section>
