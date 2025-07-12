chrome.runtime.onInstalled.addListener(() => {
     console.log("Dark/Light Toggle Extension Installed.");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
     if (changeInfo.status === 'complete' && tab.url) {
          const url = new URL(tab.url);
          const domain = url.hostname;

          chrome.storage.local.get([domain], (res) => {
               const mode = res[domain];
               if (mode === 'Dark' || mode === 'Light') {
                    chrome.scripting.executeScript({
                         target: { tabId },
                         func: applyStoredTheme,
                         args: [mode]
                    });
               }
          });
     }
});

function applyStoredTheme(mode) {
     const styleId = '__darklight_mode_toggle_style__';
     const existing = document.getElementById(styleId);
     if (existing) return;

     const style = document.createElement('style');
     style.id = styleId;

     style.textContent = `
    html {
      filter: invert(1) hue-rotate(180deg);
      background-color: ${mode === 'Dark' ? 'black' : 'white'} !important;
    }
    img, video, iframe {
      filter: invert(1) hue-rotate(180deg) !important;
    }
  `;

     document.head.appendChild(style);
     chrome.runtime.sendMessage({ mode });

          chrome.runtime.sendMessage({ mode });
}