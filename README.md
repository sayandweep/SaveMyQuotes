# 📝 SaveMyQuotes

> A lightweight Chrome extension to save and organize your favorite quotes from across the web.

Never lose an inspiring quote again! SaveMyQuotes lets you highlight any text on any webpage, save it with one right-click, and access your collection anytime with source links intact.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://github.com/sayandweep/SaveMyQuotes)

## ✨ Features

- 🎯 **One-Click Save**: Right-click any selected text and choose "Save Quote"
- 📚 **Organized Collection**: All your quotes stored in one place
- 🔗 **Source Tracking**: Every quote saved with its original URL
- 📅 **Timestamp**: Automatic date and time recording
- 💾 **Local Storage**: Your quotes stay private on your device
- 🚀 **Lightweight**: No bloat, just pure functionality

## 🖼️ Screenshots

_Coming soon! Add screenshots of:_
- Right-click context menu
- Quotes popup/display
- Quote management interface

## 🚀 Installation

### From Source (Manual Installation)

Since this extension is not yet published on the Chrome Web Store, you'll need to install it manually:

1. **Download the extension**
   ```bash
   git clone https://github.com/sayandweep/SaveMyQuotes.git
   ```
   Or download as ZIP and extract it.

2. **Open Chrome Extensions page**
   - Navigate to `chrome://extensions/`
   - Or Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the switch in the top-right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the `SaveMyQuotes` folder

5. **Start saving quotes!** 🎉

## 📖 How to Use

1. **Select text** on any webpage that you want to save as a quote
2. **Right-click** on the selected text
3. **Choose "Save Quote"** from the context menu
4. **View your quotes** by clicking the extension icon in your browser toolbar
5. **Click source links** to revisit the original webpage

## 🛠️ Built With

- **Vanilla JavaScript** - No frameworks, pure JS
- **Chrome Extension APIs**
  - `chrome.contextMenus` - Right-click menu integration
  - `chrome.storage.local` - Local data storage
  - `chrome.runtime` - Extension lifecycle management

## 📁 Project Structure

```
SaveMyQuotes/
├── manifest.json          # Extension configuration
├── background.js          # Background service worker
├── popup.html            # Extension popup interface
├── popup.js              # Popup logic
├── styles.css            # Custom styling
├── images/               # Extension icons and assets
│   ├── logo.png
│   └── logo@2x.png
└── README.md
```

## 🔧 Development

Want to contribute or modify the extension?

1. **Clone the repository**
   ```bash
   git clone https://github.com/sayandweep/SaveMyQuotes.git
   cd SaveMyQuotes
   ```

2. **Make your changes**
   - Edit the source files
   - Test locally using the manual installation steps above

3. **Reload the extension**
   - Go to `chrome://extensions/`
   - Click the reload icon on the SaveMyQuotes card

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Feature Ideas

Have an idea? Feel free to open an issue! Some ideas for future versions:

- [ ] Search/filter saved quotes
- [ ] Export quotes to text/JSON/CSV
- [ ] Categories/tags for organization
- [ ] Edit saved quotes
- [ ] Dark mode
- [ ] Sync across devices (Chrome Sync API)
- [ ] Share quotes on social media

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**sayandweep**

- GitHub: [@sayandweep](https://github.com/sayandweep)
- Twitter: [@sayandweep](https://twitter.com/sayandweep) _(if applicable)_

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 📝 Changelog

### Version 1.0.0
- Initial release
- Basic quote saving functionality
- Context menu integration
- Local storage implementation

---

**Note**: This extension is currently in development and not published on the Chrome Web Store. Manual installation is required.
