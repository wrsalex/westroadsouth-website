<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
</script>

<div class="min-h-screen bg-wrs-white flex flex-col">
  <Nav />
  <main class="flex-1 pt-16">
    {@render children()}
  </main>
  <Footer />
</div>
