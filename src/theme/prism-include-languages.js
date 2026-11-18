/**
 * Swizzled from @docusaurus/theme-classic.
 *
 * The original removes globalThis.Prism after loading the extra languages.
 * prism-liquid (via markup-templating) reads the global Prism inside its
 * tokenize hooks, so it must stay mounted or rendering fails with
 * "Prism is not defined".
 */
import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages} = prism;

  globalThis.Prism = PrismObject;
  additionalLanguages.forEach((lang) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });
}
