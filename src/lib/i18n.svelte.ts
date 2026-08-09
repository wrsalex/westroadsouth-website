import { getContext, setContext } from 'svelte';
import { translations } from './translations';

type Lang = 'en' | 'tc' | 'sc';

const LANG_KEY = Symbol('wrs-lang');

export function createI18n() {
  let lang = $state<Lang>('en');

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('wrs-lang') as Lang | null;
    if (saved === 'en' || saved === 'tc' || saved === 'sc') lang = saved;
  }

  const ctx = {
    get current() { return lang; },
    setLang(v: Lang) {
      lang = v;
      localStorage.setItem('wrs-lang', v);
    },
    t(key: string): any {
      const keys = key.split('.');
      let val: any = translations[lang];
      for (const k of keys) {
        val = val?.[k];
        if (val === undefined) return key;
      }
      return val;
    }
  };

  setContext(LANG_KEY, ctx);
  return ctx;
}

export function getI18n() {
  return getContext<ReturnType<typeof createI18n>>(LANG_KEY);
}
