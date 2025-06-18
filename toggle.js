(function () {
  const transitionStyle = document.createElement('style');
  transitionStyle.textContent = `
  * {
    transition: background-color 0.5s ease, color 0.5s ease, filter 0.5s ease !important;
  }
`;
  document.head.appendChild(transitionStyle);

  const styleId = '__darklight_mode_toggle_style__';
  const existing = document.getElementById(styleId);

  const sendMode = (mode) => chrome.runtime.sendMessage({ mode });

  const getSiteLuminance = () => {
    const bg = getComputedStyle(document.body).backgroundColor;
    const rgb = bg.match(/\d+/g)?.map(Number);
    if (!rgb || rgb.length < 3) return null;
    const [r, g, b] = rgb;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  if (existing) {
    existing.remove();
    sendMode("System"); // back to site’s native theme
    return;
  }

  const luminance = getSiteLuminance();
  const isDark = luminance !== null && luminance < 128;

  const style = document.createElement('style');
  style.id = styleId;

  if (isDark) {
    // Site is dark, apply light
    style.textContent = `
      html {
        filter: invert(1) hue-rotate(180deg);
        background-color: white !important;
      }
      img, video, iframe {
        filter: invert(1) hue-rotate(180deg) !important;
      }
    `;
    sendMode("Light");
  } else {
    // Site is light, apply dark
    style.textContent = `
      html {
        filter: invert(1) hue-rotate(180deg);
        background-color: black !important;
      }
      img, video, iframe {
        filter: invert(1) hue-rotate(180deg) !important;
      }
    `;
    sendMode("Dark");
  }

  document.head.appendChild(style);
})();
