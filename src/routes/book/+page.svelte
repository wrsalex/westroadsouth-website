<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { onMount } from 'svelte';
  import { getI18n } from '$lib/i18n.svelte';

  const i18n = getI18n();
  const SITE_KEY = '6Lc7qWwtAAAAAIUUAzm4c7nYw3NpZ3ssic_AZYmy';
  const CAL_URL = 'https://cal.com/westroadsouth/30min';

  // Step: 1=service, 2=needs, 3=details
  let step = $state(1);
  let service = $state('');
  let needs = $state('');
  let name = $state('');
  let email = $state('');
  let company = $state('');
  let countryCode = $state('+852');
  let phone = $state('');
  let status = $state<'idle' | 'sending' | 'error'>('idle');
  let errorMsg = $state('');

  let services = $derived([
    { value: 'ai-consulting', label: i18n.t('book.serviceConsulting') },
    { value: 'workflow-optimization', label: i18n.t('book.serviceWorkflow') },
    { value: 'designhub', label: i18n.t('book.serviceDesignhub') },
    { value: 'researchvault', label: i18n.t('book.serviceResearchvault') },
    { value: 'other', label: i18n.t('book.serviceOther') },
  ]);

  let countryCodes = [
    { code: '+852', label: '🇭🇰 +852' },
    { code: '+86', label: '🇨🇳 +86' },
    { code: '+853', label: '🇲🇴 +853' },
    { code: '+886', label: '🇹🇼 +886' },
    { code: '+65', label: '🇸🇬 +65' },
    { code: '+60', label: '🇲🇾 +60' },
    { code: '+66', label: '🇹🇭 +66' },
    { code: '+81', label: '🇯🇵 +81' },
    { code: '+82', label: '🇰🇷 +82' },
    { code: '+1', label: '🇺🇸 +1' },
    { code: '+44', label: '🇬🇧 +44' },
    { code: '+61', label: '🇦🇺 +61' },
  ];

  function canProceed(s: number): boolean {
    if (s === 1) return !!service;
    if (s === 2) return !!needs && needs.length >= 10;
    if (s === 3) return !!name && !!email;
    return false;
  }

  function nextStep() {
    if (step < 3 && canProceed(step)) step++;
  }

  function prevStep() {
    if (step > 1) step--;
  }

  onMount(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });

  async function handleSubmit() {
    status = 'sending';
    errorMsg = '';

    try {
      const grecaptcha = (window as any).grecaptcha;
      if (!grecaptcha) { status = 'error'; errorMsg = i18n.t('book.recaptchaFail'); return; }

      grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(SITE_KEY, { action: 'book_meeting' });
        const verifyRes = await fetch('/api/verify-recaptcha', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        });
        const verifyData = await verifyRes.json();

        if (!verifyData.success) { status = 'error'; errorMsg = i18n.t('book.error'); return; }

        // Fire-and-forget the Telegram notification, then redirect
        fetch('/api/contact', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'booking',
            service, needs,
            name, email, company,
            countryCode, phone,
            calRedirect: true
          })
        });

        window.location.href = CAL_URL;
      });
    } catch (e) {
      status = 'error';
      errorMsg = i18n.t('book.error');
    }
  }
</script>

<SEO
  title={i18n.t('book.title')}
  description={i18n.t('book.metaDesc')}
/>

<section class="min-h-screen py-12 md:py-20 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-xl mx-auto">

    <!-- Progress bar -->
    <div class="mb-10">
      <div class="flex justify-between mb-3">
        {#each [1, 2, 3] as s}
          <span class="text-xs font-semibold transition-colors" class:text-wrs-pink={step >= s} class:text-wrs-gray-light={step < s}>
            {s === 1 ? i18n.t('book.stepService') : s === 2 ? i18n.t('book.stepNeeds') : i18n.t('book.stepDetails')}
          </span>
        {/each}
      </div>
      <div class="h-1.5 bg-wrs-off-white rounded-full overflow-hidden">
        <div class="h-full bg-wrs-pink rounded-full transition-all duration-400" style="width:{(step - 1) / 2 * 100}%"></div>
      </div>
    </div>

    <!-- Header -->
    <div class="text-center mb-10">
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-3">{i18n.t('book.label')}</p>
      <h1 class="text-2xl md:text-3xl font-bold text-wrs-ink mb-3">{i18n.t('book.heading')}</h1>
      <p class="text-wrs-gray">{i18n.t('book.subheading')}</p>
    </div>

    <!-- Step 1: Service selection -->
    {#if step === 1}
      <div class="space-y-3">
        {#each services as svc}
          <button onclick={() => { service = svc.value; nextStep(); }}
            class="w-full text-left p-5 rounded-lg border-2 transition-all duration-200 hover:border-wrs-pink hover:bg-pink-50 cursor-pointer {service === svc.value ? 'border-wrs-pink bg-pink-50' : 'border-wrs-border'}">
            <span class="text-wrs-ink font-semibold">{svc.label}</span>
          </button>
        {/each}
      </div>
    {/if}

    <!-- Step 2: Needs -->
    {#if step === 2}
      <div>
        <p class="text-sm text-wrs-gray mb-4">{i18n.t('book.needsLabel')}</p>
        <textarea bind:value={needs} rows="4"
          class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all resize-y"
          placeholder={i18n.t('book.needsPlaceholder')}></textarea>
        <p class="text-xs text-wrs-gray-light mt-2" class:text-wrs-pink={needs.length >= 10}>{i18n.t('book.needsHint')} ({needs.length}/10)</p>
        <div class="flex gap-3 mt-6">
          <button onclick={prevStep} class="px-6 py-3 border border-wrs-border text-wrs-gray rounded font-semibold text-sm hover:border-wrs-pink transition-all">{i18n.t('book.back')}</button>
          <button onclick={nextStep} disabled={!canProceed(2)}
            class="px-6 py-3 bg-wrs-pink text-white rounded font-semibold text-sm hover:bg-wrs-pink-hover transition-all disabled:opacity-30 disabled:cursor-not-allowed">{i18n.t('book.continue')}</button>
        </div>
      </div>
    {/if}

    <!-- Step 3: Details -->
    {#if step === 3}
      <div>
        <div class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('book.nameLabel')} *</label>
              <input bind:value={name} type="text" required
                class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
                placeholder={i18n.t('book.namePlaceholder')} />
            </div>
            <div>
              <label class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('book.emailLabel')} *</label>
              <input bind:value={email} type="email" required
                class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
                placeholder={i18n.t('book.emailPlaceholder')} />
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('book.companyLabel')}</label>
            <input bind:value={company} type="text"
              class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
              placeholder={i18n.t('book.companyPlaceholder')} />
          </div>
          <div>
            <label class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('book.phoneLabel')}</label>
            <div class="flex gap-2">
              <select bind:value={countryCode}
                class="px-3 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink text-sm focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all appearance-none cursor-pointer"
                style="min-width:120px;">
                {#each countryCodes as cc}
                  <option value={cc.code}>{cc.label}</option>
                {/each}
              </select>
              <input bind:value={phone} type="tel"
                class="flex-1 px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
                placeholder={i18n.t('book.phonePlaceholder')} />
            </div>
          </div>

          <!-- Booking summary -->
          <div class="p-4 bg-wrs-off-white rounded-lg text-sm">
            <p class="text-wrs-ink font-semibold mb-2">{i18n.t('book.bookingSummary')}</p>
            <p class="text-wrs-gray"><span class="text-wrs-gray-light">{i18n.t('book.summaryService')}:</span> {services.find(s => s.value === service)?.label}</p>
          </div>

          {#if status === 'error'}
            <div class="p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm">{errorMsg}</div>
          {/if}
        </div>
        <div class="flex gap-3 mt-6">
          <button onclick={prevStep} class="px-6 py-3 border border-wrs-border text-wrs-gray rounded font-semibold text-sm hover:border-wrs-pink transition-all">{i18n.t('book.back')}</button>
          <button onclick={handleSubmit} disabled={status === 'sending' || !canProceed(3)}
            class="flex-1 px-6 py-4 bg-wrs-pink text-white rounded font-semibold text-base hover:bg-wrs-pink-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'sending' ? i18n.t('book.redirecting') : i18n.t('book.confirmBooking')}
          </button>
        </div>
        <p class="text-xs text-wrs-gray-light text-center mt-4">{i18n.t('book.recaptcha')}</p>
      </div>
    {/if}
  </div>
</section>

<!-- WhatsApp -->
<a href="https://wa.me/85270740202" target="_blank" rel="noopener"
  class="fixed bottom-20 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
  aria-label={i18n.t('contact.whatsapp')}>
  <svg viewBox="0 0 24 24" fill="white" class="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
</a>
