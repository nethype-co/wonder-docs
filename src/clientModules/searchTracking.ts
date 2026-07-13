import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

/**
 * Tracks site-search queries in GA4.
 *
 * The site uses `@easyops-cn/docusaurus-search-local`, which runs entirely in
 * the browser — there is no server request to log. So we listen on the search
 * input directly and forward each (debounced) query to GA4 as a
 * `view_search_results` event. That event + its `search_term` parameter is what
 * powers GA4's built-in "Site search" report (Reports → Engagement).
 */

const DEBOUNCE_MS = 1000; // fire ~1s after the user stops typing
const MIN_LENGTH = 3; // ignore very short / accidental queries
const SEARCH_INPUT_SELECTOR = 'input.navbar__search-input';

if (ExecutionEnvironment.canUseDOM) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let lastSent = '';

  const track = (raw: string) => {
    const term = raw.trim().toLowerCase();
    if (term.length < MIN_LENGTH || term === lastSent) return;

    const gtag = (window as unknown as {gtag?: (...args: unknown[]) => void}).gtag;
    if (typeof gtag !== 'function') return;

    lastSent = term;
    gtag('event', 'view_search_results', {search_term: term});
  };

  // Delegated listener so it keeps working across client-side navigation /
  // navbar re-renders (the input is torn down and recreated).
  document.addEventListener('input', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target || !target.matches?.(SEARCH_INPUT_SELECTOR)) return;

    const value = (target as HTMLInputElement).value;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => track(value), DEBOUNCE_MS);
  });
}
