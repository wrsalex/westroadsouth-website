<script lang="ts">
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();
</script>

<SEO
  title="AI Agents for Legal Document Processing"
  description="AI agents for legal: contract review, due diligence, clause extraction, and e-discovery. 70% faster document processing with human-in-the-loop validation. Hong Kong & global."
  ogType="website"
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Industry Solution</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6 speakable-heading">AI Agents for Legal Document Processing</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed speakable-summary">Purpose-built AI agents that automate legal document workflows — from contract review and due diligence to clause extraction and e-discovery. Built for law firms and in-house legal teams in Hong Kong, Singapore, and globally.</p>
    </ScrollReveal>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-off-white">
  <div class="max-w-5xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3 text-center">What We Automate</p>
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-12 text-center">Legal workflows our AI agents handle</h2>
    </ScrollReveal>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each [
        {icon: '📄', title: 'Contract Review', desc: 'First-pass review of NDAs, service agreements, and commercial contracts. Flags non-standard clauses, missing terms, and risk factors. 8 hours → 22 minutes per contract.'},
        {icon: '🔍', title: 'Due Diligence', desc: 'Automated document review across M&A and financing transactions. Extracts key terms, identifies red flags, and generates summary reports organized by topic.'},
        {icon: '📋', title: 'Clause Extraction', desc: 'Identify and categorize specific clauses across thousands of documents — indemnification, limitation of liability, governing law, termination. Full audit trail with source links.'},
        {icon: '✅', title: 'Compliance Checking', desc: 'Validate documents against regulatory requirements, internal policies, and playbook rules. Flags deviations with recommended language for remediation.'},
        {icon: '📝', title: 'Document Summarization', desc: 'Generate executive summaries of lengthy contracts, judgments, and regulatory filings. Key terms, obligations, and deadlines extracted in minutes.'},
        {icon: '🔎', title: 'E-Discovery', desc: 'Process and classify millions of documents for litigation and investigations. Relevance scoring, privilege identification, and topic clustering. 12,000+ docs processed per run.'}
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
      <h2 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-10 text-center">Contract review: 8 hours to 22 minutes</h2>
    </ScrollReveal>
    <div class="bg-wrs-off-white rounded-2xl border border-wrs-border p-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">22 min</div>
          <div class="text-sm text-wrs-gray">Per-contract review</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">12,000</div>
          <div class="text-sm text-wrs-gray">Docs per e-discovery run</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-wrs-pink mb-1">3 weeks</div>
          <div class="text-sm text-wrs-gray">Time to first workflow live</div>
        </div>
      </div>
      <p class="text-wrs-gray leading-relaxed text-center max-w-xl mx-auto">A Hong Kong corporate law firm processing 300+ NDAs and service agreements per month. Our AI agent now handles first-pass contract review — flagging non-standard clauses, missing terms, and risk factors — reducing review time from 8 hours to 22 minutes per contract. Associates focus on negotiation strategy, not proofreading.</p>
    </div>
  </div>
</section>

<section class="py-16 md:py-24 px-4 md:px-6 bg-wrs-ink text-center">
  <div class="max-w-xl mx-auto">
    <ScrollReveal>
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Automate Your Legal Document Workflows</h2>
      <p class="text-gray-400 mb-8">Book a free 15-minute assessment. We'll analyze your document workflows and identify the highest-ROI automation opportunities.</p>
      <a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover transition-all">Book a Free Assessment →</a>
    </ScrollReveal>
  </div>
</section>

<section class="py-12 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-8 text-center">Frequently Asked Questions</h2>
    <div class="space-y-3">
      {#each [
        {q: 'Can your AI agents handle jurisdiction-specific legal language?', a: 'Yes. Our agents are trained on common law (HK, UK, SG), civil law (PRC), and cross-border frameworks. We fine-tune on your firm\\u2019s precedent documents during onboarding to match your specific drafting style and jurisdiction.'},
        {q: 'How do you ensure accuracy in automated contract review?', a: 'Every extraction and classification includes a confidence score. Low-confidence items are flagged for human review. The agent learns from corrections — accuracy typically reaches 95%+ within the first month of deployment. Human-in-the-loop is built in, not bolted on.'},
        {q: 'What document formats and legal systems do your agents support?', a: 'PDF (scanned + native), DOCX, TXT, email threads, and litigation databases. OCR for scanned documents included. We integrate with iManage, NetDocuments, Clio, and SharePoint. Multi-language support: English, Traditional Chinese, Simplified Chinese.'}
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
