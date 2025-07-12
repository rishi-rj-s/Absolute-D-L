const toggleBtn = document.getElementById("toggle-btn");

function updateLabel(mode) {
  if (mode === "Dark") {
    toggleBtn.innerHTML = "🌞 Switch to Light Mode";
  } else if (mode === "Light") {
    toggleBtn.innerHTML = "🌙 Switch to Dark Mode";
  } else {
    toggleBtn.innerHTML = "🌓 Apply Mode";
  }
}

// Listen for theme updates from content or background
chrome.runtime.onMessage.addListener((message) => {
  if (message.mode) {
    updateLabel(message.mode);
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (!tab?.url) return;
      const domain = new URL(tab.url).hostname;
      chrome.storage.local.set({ [domain]: message.mode });
    });
  }
});

// On popup load, check the saved mode for this domain
(async function initPopup() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url) return;

  const domain = new URL(tab.url).hostname;
  chrome.storage.local.get(domain, (res) => {
    updateLabel(res[domain] || "System");
  });
})();

// On toggle click, run toggle.js
toggleBtn.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["toggle.js"]
  });
});