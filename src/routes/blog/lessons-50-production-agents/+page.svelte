<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
  title="What We Learned Building 50+ Production AI Agents for HK SMEs"
  description="Real lessons from deploying AI agents across Hong Kong SMEs — what worked, what broke, and what we would do differently."
  ogImage="https://westroadsouth.com/images/blog-hk-logistics.png"
  ogType="article"
/>

<svelte:head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What We Learned Building 50+ Production AI Agents for HK SMEs",
      "description": "Real lessons from deploying AI agents across Hong Kong SMEs: what worked, what broke, and what we would do differently.",
      "image": "https://westroadsouth.com/images/blog-hk-logistics.png",
      "datePublished": "2026-06-10",
      "author": { "@type": "Organization", "name": "WestRoadSouth" },
      "publisher": { "@id": "https://westroadsouth.com/#org" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://westroadsouth.com/blog/lessons-50-production-agents" }
    }
  </script>
</svelte:head>

<article class="py-16 md:py-24 px-4 md:px-6 bg-wrs-white">
14|  <div class="max-w-3xl mx-auto">
15|    <a href="/blog" class="inline-flex items-center gap-2 text-wrs-pink text-sm font-semibold hover:underline mb-8">← Back to Blog</a>
16|    <div class="flex items-center gap-3 mb-6">
17|      <span class="text-[10px] font-semibold text-wrs-pink uppercase tracking-wider bg-wrs-pink/5 px-2.5 py-1 rounded-full">Lessons Learned</span>
18|      <span class="text-xs text-wrs-gray-light">2026-06-10</span>
19|      <span class="text-xs text-wrs-gray-light">· 7 min read</span>
20|    </div>
21|    <h1 class="text-3xl md:text-4xl font-bold text-wrs-ink mb-8">What We Learned Building 50+ Production AI Agents for HK SMEs</h1>
22|    <img src="/images/blog-hk-logistics.png" alt="What We Learned Building 50+ Production AI Agents for HK SMEs" class="w-full rounded-xl mb-10" />
23|    <div class="prose prose-gray max-w-none text-wrs-gray leading-relaxed space-y-6">
24|      <p>After deploying 50+ AI agents for Hong Kong SMEs across logistics, retail, finance, and legal, we've learned a few things. Some were obvious in hindsight. Others were expensive surprises. Here's what we'd tell anyone starting their AI automation journey.</p>
25|
26|<h2>Lesson 1: The Data Problem Is Always Worse Than You Think</h2>
27|
28|<p>Every client says "our data is pretty clean." It never is. Spreadsheets with merged cells. CRM records with duplicate entries. Product catalogs where SKUs don't match between systems. One client had 14 different ways of writing "Hong Kong" in their shipping database.</p>
29|
30|<p>We now budget 30% of every project for data cleaning and normalization. If it takes less, great. It never does.</p>
31|
32|<h2>Lesson 2: Start With the Pain, Not the Technology</h2>
33|
34|<p>The most successful deployments started with a specific, painful workflow — not "we want AI." One SME owner said: "Every Monday morning, I spend 3 hours manually updating inventory across 4 sales channels." That's a perfect AI agent use case. Specific. Repetitive. Multi-system. Measurable.</p>
35|
36|<p>The least successful deployments started with "AI is the future and we need to be ready." Those projects drifted. No clear success metric = no clear endpoint.</p>
37|
38|<h2>Lesson 3: Human-in-the-Loop Is Non-Negotiable</h2>
39|
40|<p>Agents make mistakes. The question isn't whether — it's what happens when they do. Every agent we deploy has an escalation path. Low-confidence decisions get flagged for human review. The agent explains why it's uncertain. The human corrects it. The agent learns.</p>
41|
42|<p>This isn't a weakness — it's the system working as designed. After 4-6 weeks, most agents reach 95%+ accuracy on routine decisions and only escalate edge cases.</p>
43|
44|<h2>Lesson 4: Integration Is Where Projects Die</h2>
45|
46|<p>Building the agent's reasoning is the easy part. Connecting it to legacy ERP systems from 2008? That's where timelines stretch. We now map every integration point during the discovery phase — API availability, authentication method, rate limits, data format. Surprises discovered in week 1 cost hours. Surprises discovered in week 6 cost weeks.</p>
47|
48|<h2>Lesson 5: The Best Metric Is "What Did Your Team Do Instead?"</h2>
49|
50|<p>Time saved is a vanity metric. What matters is what the team did with that time. One client's ops team used their reclaimed 120 hours/week to launch a new wholesale channel — that's the real ROI. Track not what was automated, but what was unlocked.</p>
51|
52|<p><strong>The bottom line:</strong> AI agents work. They work especially well for Hong Kong SMEs dealing with multi-language, multi-system, high-volume workflows. But success depends on clean data, clear scope, and a relentless focus on what the humans do with their freed-up time.</p>
53|    </div>
54|    <div class="mt-16 p-8 bg-wrs-ink rounded-2xl text-center">
55|      <h2 class="text-2xl font-bold text-white mb-4">Ready to explore AI agents for your business?</h2>
56|      <p class="text-gray-400 mb-6">Book a free 15-minute consultation. No commitment — just a practical conversation about what AI can do for you.</p>
57|      <a href="/book" class="inline-flex items-center gap-2 px-8 py-3 bg-wrs-pink text-white rounded-full font-semibold hover:bg-wrs-pink-hover transition-all">Book a Free Consultation →</a>
58|    </div>
59|  </div>
60|</article>
61|