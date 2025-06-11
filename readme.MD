# 🌗 Dark/Light Mode Toggle Extension

A minimal, elegant browser extension to switch any website between dark and light modes with a single click — designed for clarity, simplicity, and visual comfort. Uses thoughtful dark and light color schemes, not harsh black and white contrasts.

> "Great software serves humbly, without drawing too much attention to itself."

---

## ✨ Features

- 🔁 One-click toggle between dark and light appearance (uses comfortable color schemes, not stark black/white)
- 🧠 Works on **any** website, regardless of its native theme support
- 🖥️ Simple, beautiful popup UI
- ⚡ Lightweight and fast — zero tracking, zero clutter
- 🛡️ No unnecessary permissions

---

## 🚀 Installation

### 🧪 Manual (Developer Mode)

1. Clone or download this repository.
2. Open `chrome://extensions/` (or `brave://extensions/`)
3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the folder containing this extension.

---

## 🛠 Usage

1. Click the extension icon in your toolbar.
2. Press the **Toggle Dark/Light** button.
3. Enjoy a cleaner, comfortable view of the current site.

---

## 🧩 Tech Stack

- Manifest V3
- Vanilla JavaScript
- Dynamic CSS injection
- No frameworks or external dependencies

---

## 📁 File Structure

```
dark-light-toggle-extension/
├── manifest.json
├── popup.html
├── popup.js
├── toggle.js
├── background.js
├── LICENSE
├── icon.png
└── README.md
```

---

## 🔐 Privacy & Permissions

This extension:
- **Does NOT collect any data**
- Requires only:
  - `activeTab` – to apply the theme
  - `scripting` – to inject toggle logic

---

## 🙏 Credits

Crafted with simplicity by [Rishiraj Sajeev](https://github.com/rishi-rj-s)

Inspired by the need for a calm, readable browsing experience.

---

## 🧠 Future Improvements (Coming Soon)

- Persistent mode memory across tabs
- Keyboard shortcut support
- Auto mode by time of day (e.g. light in day, dark at night)
- Option to fine-tune brightness and contrast

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Feedback

If you have suggestions, feedback, or want to contribute — feel free to open an issue or contact me.

> ⭐ If you find this useful, consider starring the repo!