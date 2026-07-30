<script>
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
  let submitted = $state(false);
</script>

<svelte:head>
  <title>Contact — West Road South</title>
</svelte:head>

<section class="py-24 md:py-32 px-6 bg-wrs-off-white">
  <div class="max-w-4xl mx-auto">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
      <h1 class="text-4xl md:text-5xl font-bold text-wrs-ink mb-6">Let's talk about automation</h1>
      <p class="text-lg text-wrs-gray max-w-2xl leading-relaxed mb-12">
        Tell us about your business and what you're trying to achieve. We'll get back to you within 24 hours with concrete ideas — not a sales deck.
      </p>
    </ScrollReveal>

    <div class="grid md:grid-cols-[1fr_300px] gap-12">
      <ScrollReveal>
        {#if submitted}
          <div class="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <div class="text-4xl mb-4">✓</div>
            <h3 class="text-xl font-bold text-green-800 mb-2">Message sent</h3>
            <p class="text-green-700">We'll get back to you within 24 hours.</p>
          </div>
        {:else}
          <form class="space-y-5" onsubmit={(e) => { e.preventDefault(); submitted = true; }}>
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <label for="contact-name" class="block text-sm font-semibold text-wrs-ink mb-2">Name</label>
                <input id="contact-name" type="text" required class="w-full px-4 py-3 rounded border border-wrs-border focus:border-wrs-pink focus:ring-1 focus:ring-wrs-pink outline-none transition-colors text-wrs-ink" placeholder="Your name" />
              </div>
              <div>
                <label for="contact-email" class="block text-sm font-semibold text-wrs-ink mb-2">Email</label>
                <input id="contact-email" type="email" required class="w-full px-4 py-3 rounded border border-wrs-border focus:border-wrs-pink focus:ring-1 focus:ring-wrs-pink outline-none transition-colors text-wrs-ink" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label for="contact-company" class="block text-sm font-semibold text-wrs-ink mb-2">Company</label>
              <input id="contact-company" type="text" class="w-full px-4 py-3 rounded border border-wrs-border focus:border-wrs-pink focus:ring-1 focus:ring-wrs-pink outline-none transition-colors text-wrs-ink" placeholder="Your company" />
            </div>
            <div>
              <label for="contact-message" class="block text-sm font-semibold text-wrs-ink mb-2">What are you looking to automate?</label>
              <textarea id="contact-message" rows="4" required class="w-full px-4 py-3 rounded border border-wrs-border focus:border-wrs-pink focus:ring-1 focus:ring-wrs-pink outline-none transition-colors text-wrs-ink resize-none" placeholder="Describe your workflow, the problem you're trying to solve, or just what you're curious about..."></textarea>
            </div>
            <button type="submit" class="px-8 py-3.5 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-colors duration-200">
              Send Message
            </button>
          </form>
        {/if}
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-semibold text-wrs-ink uppercase tracking-wider mb-2">Email</h3>
            <a href="mailto:alex@westroadsouth.com" class="text-wrs-pink hover:underline">alex@westroadsouth.com</a>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-wrs-ink uppercase tracking-wider mb-2">Location</h3>
            <p class="text-wrs-gray text-sm">Hong Kong</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-wrs-ink uppercase tracking-wider mb-2">Response Time</h3>
            <p class="text-wrs-gray text-sm">Within 24 hours — typically same business day.</p>
          </div>
          <div class="pt-4 border-t border-wrs-border">
            <h3 class="text-sm font-semibold text-wrs-ink uppercase tracking-wider mb-2">What happens next</h3>
            <ol class="text-sm text-wrs-gray space-y-2">
              <li>1. We reply within 24 hours</li>
              <li>2. 30-min discovery call (free)</li>
              <li>3. Opportunity assessment</li>
              <li>4. Tailored proposal with ROI estimate</li>
            </ol>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>
