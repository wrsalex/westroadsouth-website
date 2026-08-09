1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { onMount } from 'svelte';
  import { getI18n } from '$lib/i18n.svelte';

  const i18n = getI18n();
  const SITE_KEY = '6Lc7qWwtAAAAAIUUAzm4c7nYw3NpZ3ssic_AZYmy';

  let formData = $state({ name: '', email: '', company: '', message: '' });
  let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
  let errorMsg = $state('');

  onMount(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();
    status = 'sending';
    errorMsg = '';

    try {
      const grecaptcha = (window as any).grecaptcha;
      if (!grecaptcha) {
        status = 'error';
        errorMsg = 'reCAPTCHA not loaded. Please refresh.';
        return;
      }

      grecaptcha.ready(async () => {
        const token = await grecaptcha.execute(SITE_KEY, { action: 'submit' });
        const verifyRes = await fetch('/api/verify-recaptcha', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        });
        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
          status = 'error';
          errorMsg = i18n.t('contact.error');
          return;
        }

        const res = await fetch('/api/contact', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          status = 'success';
          formData = { name: '', email: '', company: '', message: '' };
        } else { throw new Error('Submission failed'); }
      });
    } catch (e) {
      status = 'error';
      errorMsg = 'Something went wrong.';
    }
  }
</script>

<SEO
  title="Contact WestRoadSouth — Start Your AI Automation Journey"
  description="Ready to explore AI automation? Reach our Hong Kong team via form, email, or WhatsApp. We respond within 24 hours — no sales pitch, just practical advice."
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-2xl mx-auto">
    <div class="text-center mb-12">
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">{i18n.t('contact.label')}</p>
      <h1 class="text-2xl md:text-4xl font-bold text-wrs-ink mb-4">{i18n.t('contact.title')}</h1>
      <p class="text-wrs-gray leading-relaxed">{i18n.t('contact.desc')}</p>
    </div>

    {#if status === 'success'}
      <div class="text-center p-12 rounded-lg border border-green-200 bg-green-50">
        <div class="text-4xl mb-4">✅</div>
        <h2 class="text-xl font-bold text-wrs-ink mb-2">{i18n.t('contact.success')}</h2>
        <p class="text-wrs-gray">{i18n.t('contact.successDesc')}</p>
        <a href="/" class="inline-block mt-6 text-wrs-pink font-semibold hover:underline">← {i18n.t('contact.backHome')}</a>
      </div>
    {:else}
      <form onsubmit={handleSubmit} class="space-y-6">
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <label for="name" class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('contact.name')} *</label>
            <input id="name" type="text" required bind:value={formData.name}
              class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
              placeholder={i18n.t('contact.namePlaceholder')} />
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('contact.email')} *</label>
            <input id="email" type="email" required bind:value={formData.email}
              class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
              placeholder={i18n.t('contact.emailPlaceholder')} />
          </div>
        </div>
        <div>
          <label for="company" class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('contact.company')}</label>
          <input id="company" type="text" bind:value={formData.company}
            class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all"
            placeholder={i18n.t('contact.companyPlaceholder')} />
        </div>
        <div>
          <label for="message" class="block text-sm font-semibold text-wrs-ink mb-2">{i18n.t('contact.message')} *</label>
          <textarea id="message" required rows="5" bind:value={formData.message}
            class="w-full px-4 py-3 rounded-lg border border-wrs-border bg-white text-wrs-ink placeholder:text-wrs-gray-light focus:outline-none focus:border-wrs-pink focus:ring-2 focus:ring-wrs-pink/10 transition-all resize-y"
            placeholder={i18n.t('contact.messagePlaceholder')}></textarea>
        </div>

        {#if status === 'error'}
          <div class="p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm">{errorMsg}</div>
        {/if}

        <button type="submit" disabled={status === 'sending'}
          class="w-full sm:w-auto px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'sending' ? i18n.t('contact.sending') : i18n.t('contact.send')}
        </button>

        <p class="text-xs text-wrs-gray-light text-center mt-4">
          {i18n.t('contact.recaptcha')}. <a href="https://policies.google.com/privacy" class="underline" target="_blank">{i18n.t('contact.privacy')}</a> &amp; <a href="https://policies.google.com/terms" class="underline" target="_blank">{i18n.t('contact.terms')}</a>.
        </p>
      </form>
    {/if}
  </div>
</section>

<!-- WhatsApp -->
<a href="https://wa.me/85270740202" target="_blank" rel="noopener"
  class="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
  aria-label={i18n.t('contact.whatsapp')}>
  <svg viewBox="0 0 24 24" fill="white" class="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
</a>
