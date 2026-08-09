<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();

  let step = $state<'quiz' | 'results' | 'report'>('quiz');
  let scores = $state<Record<string, number>>({});
  let selectedTexts = $state<Record<string, string>>({});
  let totalScore = $state(0);
  let email = $state('');
  let status = $state<'idle' | 'sending' | 'error'>('idle');
  let errorMsg = $state('');

  let questions = $derived((i18n.t('scorecard.questions') as any[]).map((q: any, qi: number) => ({
    id: `q${qi}`,
    q: q.q,
    opts: q.opts.map((t: string, oi: number) => ({ v: 3 - oi, t }))
  })));

  function selectAnswer(qId: string, value: number, text: string) { scores[qId] = value; selectedTexts[qId] = text; }
  function allAnswered() { return questions.every(q => scores[q.id] !== undefined); }

  function calcScore() {
    totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    step = 'results';
  }

  function tierIdx(score: number): number {
    if (score >= 16) return 3;
    if (score >= 10) return 2;
    if (score >= 5) return 1;
    return 0;
  }

  function tierColor(score: number): string {
    return ['#44CC66', '#60a5fa', '#f59e0b', '#E42869'][tierIdx(score)];
  }

  let tierLabels = $derived(i18n.t('scorecard.tierLabels') as string[]);
  let tierDescs = $derived(i18n.t('scorecard.tierDescs') as string[]);
  let emoji = $derived(['🟢', '🔵', '🟡', '🔴'][tierIdx(totalScore)]);

  function catScore(qi: number): number { return scores[`q${qi}`] ?? 0; }
  function catPercent(qi: number): number { return (catScore(qi) / 3) * 100; }
  function catColor(v: number): string {
    if (v === 3) return '#E42869';
    if (v === 2) return '#f59e0b';
    if (v === 1) return '#60a5fa';
    return '#44CC66';
  }
  function catLabel(v: number): string {
    if (v === 3) return '⚠ High impact';
    if (v === 2) return '○ Moderate';
    if (v === 1) return '✓ Low';
    return '✓ Optimized';
  }

  let recommendations = $derived(
    questions
      .map((q, i) => ({ qi: i, score: scores[`q${i}`] ?? 0, label: q.q }))
      .filter(r => r.score >= 2)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  );

  let recTexts = $derived(i18n.t('scorecard.recommendations') as Record<string, string>);

  async function getReport() {
    status = 'sending';
    fetch('/api/contact', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'scorecard', email, totalScore,
        tier: tierLabels[tierIdx(totalScore)],
        answers: JSON.stringify(scores),
        answersText: JSON.stringify(selectedTexts)
      })
    }).catch(() => {});
    status = 'idle';
    step = 'report';
  }
</script>

<SEO
  title={i18n.t('scorecard.title')}
  description="Take our free 5-minute assessment. Score your organization across strategy, data, process, and technology readiness. Get a personalized report with actionable recommendations."
  schema={'<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How accurate is this AI readiness scorecard?","acceptedAnswer":{"@type":"Answer","text":"The assessment is based on our experience across 200+ AI implementations. It correctly identifies readiness tier for 85%+ of organizations we subsequently engage with."}},{"@type":"Question","name":"What happens after I get my results?","acceptedAnswer":{"@type":"Answer","text":"You will receive an instant report with overall score, category breakdown, and prioritized recommendations. You can book a free 15-minute consultation to discuss your results."}},{"@type":"Question","name":"Is my data kept private?","acceptedAnswer":{"@type":"Answer","text":"Yes. Your responses and email are used solely for your personalized report. We do not share, sell, or use your data for any other purpose."}},{"@type":"Question","name":"Do I need technical knowledge to take this assessment?","acceptedAnswer":{"@type":"Answer","text":"No. The questions are designed for business leaders and decision-makers. Each question describes a business scenario you rate. The assessment takes about 3 minutes."}}]}</script>'}
/>

<section class="min-h-screen py-12 md:py-20 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-xl mx-auto">

    <!-- STEP 1: Quiz -->
    {#if step === 'quiz'}

<section class="py-12 px-4 bg-wrs-off-white -mx-4 md:-mx-6 mb-10">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-wrs-ink mb-8 text-center">About This Assessment</h2>
    <div class="space-y-3">
      {#each [
        {q: 'How accurate is this AI readiness scorecard?', a: 'The assessment is based on our experience across 200+ AI implementations. The 7 questions cover the four dimensions that most predict automation success: strategy, process maturity, data readiness, and technology infrastructure. While no self-assessment is perfect, our scorecard correctly identifies the readiness tier for 85%+ of organizations we subsequently engage with. Think of it as a directional signal, not a definitive diagnosis.'},
        {q: 'What happens after I get my results?', a: 'You will receive an instant report with your overall score, category breakdown, and 2\u20133 prioritized recommendations. You can book a free 15-minute consultation to discuss your results with our team. There is no obligation \u2014 we will walk through your biggest automation opportunities and outline what a proof-of-concept would look like.'},
        {q: 'Is my data kept private?', a: 'Yes. Your assessment responses and email are used solely to generate your personalized report and send you the results. We do not share, sell, or use your data for any other purpose. See our Privacy Policy for full details.'},
        {q: 'Do I need technical knowledge to take this assessment?', a: 'No. The questions are designed for business leaders, operations managers, and decision-makers \u2014 not engineers. Each question describes a business scenario and asks you to rate how well it describes your organization. The assessment takes about 3 minutes.'}
      ] as faq, i}
        <details class="group bg-white rounded-xl border border-wrs-border hover:border-wrs-pink/20 transition-all">
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

      <div class="text-center mb-10">
        <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3">{i18n.t('scorecard.label')}</p>
        <h1 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-3">{i18n.t('scorecard.heading')}</h1>
        <p class="text-wrs-gray">{i18n.t('scorecard.subheading')}</p>
      </div>

      <div class="space-y-8">
        {#each questions as q, qi}
          <div class="p-5 rounded-lg border transition-all" class:border-wrs-pink={scores[q.id] !== undefined} class:bg-pink-50={scores[q.id] !== undefined} class:border-wrs-border={scores[q.id] === undefined}>
            <p class="text-wrs-ink font-semibold mb-3 text-sm">{qi + 1}. {q.q}</p>
            <div class="space-y-2">
              {#each q.opts as opt}
                <button onclick={() => selectAnswer(q.id, opt.v, opt.t)}
                  class="w-full text-left p-3 rounded-lg border text-sm transition-all cursor-pointer {scores[q.id] === opt.v ? 'border-wrs-pink bg-pink-50 text-wrs-ink font-medium' : 'border-wrs-border text-wrs-gray hover:border-wrs-pink/50'}"
                >{opt.t}</button>
              {/each}
            </div>
          </div>
        {/each}
        <button onclick={calcScore} disabled={!allAnswered()}
          class="w-full py-4 bg-wrs-pink text-white font-semibold rounded-lg text-base hover:bg-wrs-pink-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed">
          {i18n.t('scorecard.seeResults')}
        </button>
      </div>

    <!-- STEP 2: Results + email capture -->
    {:else if step === 'results'}
      <div class="text-center">
        <div class="text-5xl mb-6">{emoji}</div>
        <h1 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-2">{i18n.t('scorecard.yourScore')}: {totalScore}/21</h1>
        <p class="text-lg font-semibold mb-4" style="color:{tierColor(totalScore)}">{tierLabels[tierIdx(totalScore)]}</p>
        <p class="text-wrs-gray mb-8 max-w-md mx-auto leading-relaxed">{tierDescs[tierIdx(totalScore)]}</p>

        <div class="max-w-md mx-auto mb-8">
          <div class="flex justify-between text-xs text-wrs-gray-light mb-2">
            <span>{i18n.t('scorecard.scaleLabels')[0]}</span><span>{i18n.t('scorecard.scaleLabels')[1]}</span>
          </div>
          <div class="h-3 bg-wrs-off-white rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-700" style="width:{totalScore / 21 * 100}%; background:{tierColor(totalScore)}"></div>
          </div>
        </div>

        <div class="max-w-sm mx-auto p-6 bg-wrs-off-white rounded-lg text-left">
          <p class="text-wrs-ink font-semibold mb-2 text-sm">{i18n.t('scorecard.getReport')}</p>
          <p class="text-wrs-gray text-xs mb-4">{i18n.t('scorecard.reportDesc')}</p>
          <input bind:value={email} type="email" required placeholder={i18n.t('scorecard.emailPlaceholder')}
            class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink text-sm placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink mb-3" />
          {#if status === 'error'}<p class="text-red-500 text-xs mb-3">{errorMsg}</p>{/if}
          <button onclick={getReport} disabled={status === 'sending' || !email}
            class="w-full py-3 bg-wrs-pink text-white font-semibold rounded-lg text-sm hover:bg-wrs-pink-hover transition-all disabled:opacity-50">
            {status === 'sending' ? i18n.t('scorecard.sending') : i18n.t('scorecard.viewReport')}
          </button>
        </div>
      </div>

    <!-- STEP 3: Full Report -->
    {:else if step === 'report'}
      <div class="text-center mb-8">
        <div class="text-5xl mb-4">{emoji}</div>
        <h1 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-2">{i18n.t('scorecard.reportTitle')}</h1>
        <p class="text-wrs-gray text-sm">{i18n.t('scorecard.reportFor')} <strong>{email}</strong></p>
      </div>

      <div class="bg-wrs-ink rounded-xl p-6 mb-6 text-center">
        <p class="text-gray-400 text-xs uppercase tracking-wide mb-2">{i18n.t('scorecard.overallScore')}</p>
        <div class="text-4xl font-bold mb-1" style="color:{tierColor(totalScore)}">{totalScore}<span class="text-lg text-gray-500">/21</span></div>
        <p class="text-sm font-semibold" style="color:{tierColor(totalScore)}">{tierLabels[tierIdx(totalScore)]}</p>
      </div>

      <div class="bg-wrs-card rounded-xl p-6 mb-6 border border-wrs-border">
        <h3 class="text-wrs-ink font-semibold mb-4 text-sm">{i18n.t('scorecard.breakdownTitle')}</h3>
        <div class="space-y-4">
          {#each questions as q, qi}
            {@const cs = catScore(qi)}
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-wrs-gray">{q.q}</span>
                <span class="font-semibold" style="color:{catColor(cs)}">{catLabel(cs)}</span>
              </div>
              <div class="h-2 bg-wrs-off-white rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all duration-500" style="width:{catPercent(qi)}%; background:{catColor(cs)}"></div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      {#if recommendations.length > 0}
        <div class="bg-wrs-off-white rounded-xl p-6 mb-8 border border-wrs-border">
          <h3 class="text-wrs-ink font-semibold mb-4 text-sm">{i18n.t('scorecard.recTitle')}</h3>
          <div class="space-y-4">
            {#each recommendations as rec}
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style="background:{catColor(rec.score)}">{rec.score}</div>
                <div>
                  <p class="text-wrs-ink text-sm font-medium mb-1">{rec.label}</p>
                  <p class="text-wrs-gray text-xs leading-relaxed">{recTexts[`q${rec.qi}`] || i18n.t('scorecard.recDefault')}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <div class="text-center">
        <p class="text-wrs-gray text-sm mb-4">{i18n.t('scorecard.discussResults')}</p>
        <a href="/book" class="inline-block px-10 py-4 bg-wrs-pink text-white font-semibold rounded-lg hover:bg-wrs-pink-hover transition-all">{i18n.t('scorecard.bookConsultation')}</a>
      </div>

    {/if}

  </div>
</section>
