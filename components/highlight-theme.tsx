import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const HighlightTheme = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const linkStyleHighlight = document.head.querySelector('#hightlight-theme');
    linkStyleHighlight?.remove();
    const newlinkStyleHighlight = document.createElement('link');
    newlinkStyleHighlight.id = 'hightlight-theme';
    newlinkStyleHighlight.rel = 'stylesheet';
    newlinkStyleHighlight.type = 'text/css';
    newlinkStyleHighlight.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${
      resolvedTheme == 'dark' ? 'github-dark' : 'github'
    }.min.css`;
    document.head.appendChild(newlinkStyleHighlight);
  }, [resolvedTheme]);

  return null;
};

export default HighlightTheme;
