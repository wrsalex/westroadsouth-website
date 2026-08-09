1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { getI18n } from '$lib/i18n.svelte';
  const i18n = getI18n();

  let step = $state<'quiz' | 'results' | 'report'>('quiz');
  let scores = $state<Record<string, number>>({});
  let totalScore = $state(0);
  let email = $state('');
  let status = $state<'idle' | 'sending' | 'error'>('idle');
  let errorMsg = $state('');

  let questions = $derived((i18n.t('scorecard.questions') as any[]).map((q: any, qi: number) => ({
    id: `q${qi}`,
    q: q.q,
    opts: q.opts.map((t: string, oi: number) => ({ v: 3 - oi, t }))
  })));

  function selectAnswer(qId: string, value: number) { scores[qId] = value; }
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

  // Category score for bar chart (0-3 per question, worst=3)
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

  // Recommendations: find top 2-3 problem areas
  let recommendations = $derived(
    questions
      .map((q, i) => ({ qi: i, score: scores[`q${i}`] ?? 0, label: q.q }))
      .filter(r => r.score >= 2)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
  );

  // Recommendation texts mapped by question index
  let recTexts = $derived(i18n.t('scorecard.recommendations') as Record<string, string>);

  async function getReport() {
    status = 'sending';
    // Fire Telegram notification in background
    fetch('/api/contact', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'scorecard', email, totalScore,
        tier: tierLabels[tierIdx(totalScore)],
        answers: JSON.stringify(scores)
      })
    }).catch(() => {}); // Don't block on Telegram

    status = 'idle';
    step = 'report';
  }
</script>

<SEO
  title={i18n.t('scorecard.title')}
  description="Take our free 5-minute assessment. Score your organization across strategy, data, process, and technology readiness. Get a personalized report with actionable recommendations."
/>

<section class="min-h-screen py-12 md:py-20 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-xl mx-auto">

    <!-- STEP 1: Quiz -->
    {#if step === 'quiz'}
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
                <button onclick={() => selectAnswer(q.id, opt.v)}
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

      <!-- Overall score -->
      <div class="bg-wrs-ink rounded-xl p-6 mb-6 text-center">
        <p class="text-gray-400 text-xs uppercase tracking-wide mb-2">{i18n.t('scorecard.overallScore')}</p>
        <div class="text-4xl font-bold mb-1" style="color:{tierColor(totalScore)}">{totalScore}<span class="text-lg text-gray-500">/21</span></div>
        <p class="text-sm font-semibold" style="color:{tierColor(totalScore)}">{tierLabels[tierIdx(totalScore)]}</p>
      </div>

      <!-- Category breakdown -->
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

      <!-- Recommendations -->
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

      <!-- CTA -->
      <div class="text-center">
        <p class="text-wrs-gray text-sm mb-4">{i18n.t('scorecard.discussResults')}</p>
        <a href="/book" class="inline-block px-10 py-4 bg-wrs-pink text-white font-semibold rounded-lg hover:bg-wrs-pink-hover transition-all">{i18n.t('scorecard.bookConsultation')}</a>
      </div>

    {/if}

  </div>
</section>
