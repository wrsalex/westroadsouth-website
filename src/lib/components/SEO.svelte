<script lang="ts">
  let {
    title = '',
    description = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = 'https://westroadsouth.com/images/og-default.png',
    ogType = 'website',
    schema = ''
  } = $props();

  const displayTitle = $derived(title ? `${title} — WestRoadSouth` : 'WestRoadSouth — AI Agent Services');
  const displayOgTitle = $derived(ogTitle || displayTitle);
  const displayOgDesc = $derived(ogDescription || description || 'WestRoadSouth builds custom AI agents for complex workflows, process optimization, and enterprise automation. Based in Hong Kong, serving globally.');
  const displayImage = $derived(ogImage || 'https://westroadsouth.com/images/og-default.png');
</script>

<svelte:head>
  <title>{displayTitle}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}

  <!-- Open Graph -->
  <meta property="og:title" content={displayOgTitle} />
  <meta property="og:description" content={displayOgDesc} />
  <meta property="og:image" content={displayImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  {#if ogType}
    <meta property="og:type" content={ogType} />
  {/if}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={displayOgTitle} />
  <meta name="twitter:description" content={displayOgDesc} />
  <meta name="twitter:image" content={displayImage} />

  <!-- Structured Data -->
  {#if schema}
    {@html schema}
  {/if}
</svelte:head>
