<script lang="ts">
  let { i18n } = $props();
</script>

<footer class="bg-wrs-ink text-white py-16 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h3 class="text-lg font-bold mb-4">WestRoadSouth</h3>
        <p class="text-gray-400 text-sm leading-relaxed mb-4">{i18n.t('hero.desc')}</p>
        <a href="/book" class="inline-block px-4 py-2 bg-wrs-pink text-white text-sm font-semibold rounded hover:bg-wrs-pink-hover transition-all">{i18n.t('footer.getInTouch')}</a>
      </div>
      <div>
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">{i18n.t('footer.servicesHeading')}</h4>
        <div class="space-y-2">
          <a href="/services" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.agentDev')}</a>
          <a href="/services" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.processOpt')}</a>
          <a href="/services" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.customerAI')}</a>
          <a href="/services" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.aiInfra')}</a>
          <a href="/sme-automation" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.smeAuto')}</a>
          <a href="/logistics-ai" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">Logistics AI</a>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">{i18n.t('footer.productsHeading')}</h4>
        <div class="space-y-2">
          <a href="/demo/designhub" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.designhub')}</a>
          <a href="/demo/researchvault" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.researchVault')}</a>
          <a href="/demo/avionone" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.avionone')}</a>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">{i18n.t('footer.companyHeading')}</h4>
        <div class="space-y-2">
          <a href="/about" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.about')}</a>
          <a href="/process" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.process')}</a>
          <a href="/case-studies" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.caseStudies')}</a>
          <a href="/blog" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.blog')}</a>
          <a href="/pricing" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.pricing')}</a>
          <a href="/book" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.contact')}</a>
          <a href="/privacy" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.privacy')}</a>
          <a href="/terms" class="block text-sm text-gray-400 hover:text-wrs-pink transition-colors">{i18n.t('footer.terms')}</a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-600">
      &copy; {new Date().getFullYear()} WestRoadSouth Limited. {i18n.t('footer.rights')}
    </div>
  </div>
</footer>
