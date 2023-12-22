import { useEffect } from 'react';

export const useFoucFix = () => {
  useEffect(() => {
    let ssrPageStyleSheetsEntries = Array.from(
      document.querySelectorAll('link[rel="stylesheet"][data-n-p]')
    ).map(element => ({
      element,
      href: element.getAttribute('href'),
    }));

    ssrPageStyleSheetsEntries.forEach(({ element }) =>
      element.removeAttribute('data-n-p')
    );

    const fixedStyleHrefs = [];

    const mutationHandler = mutations => {
      const newStyleEntries = mutations
        .filter(
          ({ target }) =>
            target.nodeName === 'STYLE' && target.hasAttribute('data-n-href')
        )
        .map(({ target }) => ({
          element: target,
          href: target.getAttribute('data-n-href'),
        }));

      newStyleEntries.forEach(({ element, href }) => {
        const styleExists = fixedStyleHrefs.includes(href);

        if (styleExists) {
          element.remove();
        } else {
          element.setAttribute('data-fouc-fix-n-href', href);
          element.removeAttribute('data-n-href');
          fixedStyleHrefs.push(href);
        }
      });

      ssrPageStyleSheetsEntries = ssrPageStyleSheetsEntries.reduce((entries, entry) => {
        const { element, href } = entry;
        const styleExists = fixedStyleHrefs.includes(href);

        if (styleExists) {
          element.remove();
        } else {
          entries.push(entry);
        }

        return entries;
      }, []);
    };

    const observer = new MutationObserver(mutationHandler);

    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ['media'],
    });

    return () => observer.disconnect();
  }, []);
};
