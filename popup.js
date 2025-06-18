const toggleBtn = document.getElementById("toggle-btn");

// Update button label
function updateLabel(mode) {
     if (mode === "Dark") {
          toggleBtn.innerHTML = "🌞 Switch to Light Mode";
     } else if (mode === "Light") {
          toggleBtn.innerHTML = "🌙 Switch to Dark Mode";
     } else {
          toggleBtn.innerHTML = "🌓 Apply Mode";
     }
}
   
// Click handler
toggleBtn.addEventListener("click", async () => {
     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
     chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["toggle.js"]
     });
});

// Receive updated mode from toggle.js
chrome.runtime.onMessage.addListener((message) => {
     if (message.mode) {
          updateLabel(message.mode);
          chrome.storage.local.set({ extensionMode: message.mode });
     }
});

// Initial load
chrome.storage.local.get("extensionMode", (data) => {
     updateLabel(data.extensionMode || "System");
});
