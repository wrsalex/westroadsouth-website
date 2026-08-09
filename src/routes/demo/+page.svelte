1|<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';

  let messages = [
    { role: 'user', text: 'I need to reduce manual data entry for our order processing. We handle ~200 orders/day across 3 systems.' },
    { role: 'agent', text: `I can help with that. Based on your volume, I\'d recommend an integration agent that connects your 3 systems and automates order entry. Typical outcome: 85% reduction in manual work, 2-second processing per order. Want me to outline the architecture?` },
    { role: 'user', text: 'Yes, but we also need real-time inventory sync. Can you handle that?' },
    { role: 'agent', text: 'Absolutely. The same agent can handle both — order entry + inventory sync. I\'d add a webhook listener for real-time stock updates and a conflict resolution layer for simultaneous orders. This is a pattern we\'ve deployed for 3 logistics clients in Hong Kong. Estimated build: 2 weeks to staging, 4 weeks to production.' },
  ];
  let currentIndex = $state(0);
  let visibleMessages = $state<typeof messages>([]);
  let isTyping = $state(false);
  let demoStarted = $state(false);

  function startDemo() {
    demoStarted = true;
    typeNext();
  }

  async function typeNext() {
    if (currentIndex >= messages.length) return;
    isTyping = true;
    await new Promise(r => setTimeout(r, 800 + Math.random() * 600));
    visibleMessages = [...visibleMessages, messages[currentIndex]];
    currentIndex++;
    isTyping = false;
  }
</script>

<SEO
  title="Interactive AI Agent Demo — See Production AI in Action"
  description="Watch a simulated client conversation with a WestRoadSouth AI agent. See how we analyze requirements and propose solutions in real time. No setup required."
/>

<section class="py-16 md:py-32 px-4 md:px-6 bg-wrs-white">
  <div class="max-w-4xl mx-auto text-center">
    <ScrollReveal>
      <p class="text-wrs-pink text-sm font-semibold uppercase tracking-widest mb-4">Live Demo</p>
      <h1 class="text-3xl md:text-5xl font-bold text-wrs-ink mb-6">See an AI agent in action</h1>
      <p class="text-lg text-wrs-gray max-w-2xl mx-auto leading-relaxed mb-10">This is a mock-up of a real client conversation — the kind we have every day. Watch how an AI agent analyzes requirements and proposes solutions in real time.</p>
      {#if !demoStarted}
        <button onclick={startDemo} class="px-10 py-4 bg-wrs-pink text-white font-semibold rounded hover:bg-wrs-pink-hover transition-all text-lg">Start Demo</button>
      {/if}
    </ScrollReveal>
  </div>
</section>

{#if demoStarted}
<section class="py-12 md:py-20 px-6 bg-wrs-off-white">
  <div class="max-w-2xl mx-auto">
    <div class="bg-white rounded-2xl border border-wrs-border shadow-sm overflow-hidden">
      <!-- Chat header -->
      <div class="px-6 py-4 border-b border-wrs-border flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-wrs-pink flex items-center justify-center text-white text-xs font-bold">AI</div>
        <div>
          <div class="text-sm font-semibold text-wrs-ink">WestRoadSouth Agent</div>
          <div class="text-xs text-green-600 flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>Online</div>
        </div>
      </div>
      <!-- Messages -->
      <div class="p-6 space-y-4 min-h-[400px]">
        {#each visibleMessages as msg, i}
          <ScrollReveal>
            <div class="flex {msg.role === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed {msg.role === 'user' ? 'bg-wrs-pink text-white rounded-br-md' : 'bg-wrs-off-white text-wrs-ink rounded-bl-md border border-wrs-border'}">
                {msg.text}
              </div>
            </div>
          </ScrollReveal>
        {/each}
        {#if isTyping}
          <div class="flex justify-start">
            <div class="bg-wrs-off-white rounded-2xl rounded-bl-md border border-wrs-border px-5 py-3">
              <div class="flex gap-1">
                <span class="w-2 h-2 rounded-full bg-wrs-gray-light animate-bounce" style="animation-delay:0ms"></span>
                <span class="w-2 h-2 rounded-full bg-wrs-gray-light animate-bounce" style="animation-delay:150ms"></span>
                <span class="w-2 h-2 rounded-full bg-wrs-gray-light animate-bounce" style="animation-delay:300ms"></span>
              </div>
            </div>
          </div>
        {/if}
      </div>
      <!-- Continue button -->
      {#if currentIndex < messages.length && !isTyping}
        <div class="px-6 pb-6 text-center">
          <button onclick={typeNext} class="px-6 py-2.5 border border-wrs-pink text-wrs-pink rounded-full text-sm font-semibold hover:bg-wrs-pink hover:text-white transition-all">Continue Conversation →</button>
        </div>
      {/if}
      {#if currentIndex >= messages.length && !isTyping}
        <div class="px-6 pb-6 text-center">
          <p class="text-wrs-gray text-sm mb-4">This is what every client engagement looks like. Ready to start yours?</p>
          <a href="/book" class="inline-block px-8 py-3 bg-wrs-pink text-white font-semibold rounded-full hover:bg-wrs-pink-hover transition-all">Book a Discovery Call</a>
        </div>
      {/if}
    </div>
  </div>
</section>
{/if}
