import { useMemo } from 'react';

type Params = Record<string, any> | undefined;

const translations: Record<string, string> = {
  'landing.subtitle': 'Welcome to TalkChain — connect and communicate.',
  'landing.getStarted': 'Get Started',
  'landing.helper': 'Sign in to continue or create an account.',
  'landing.footer': 'TalkChain v{version}',
};

function resolveKey(key: string, params?: Params) {
  const t = translations[key] ?? key;
  if (!params) return t;
  return t.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? ''));
}

export function useLanguage() {
  // Minimal stub for the translation hook used by the app.
  return useMemo(() => ({
    t: (key: string, params?: Params) => resolveKey(key, params),
  }), []);
}

export default useLanguage;
