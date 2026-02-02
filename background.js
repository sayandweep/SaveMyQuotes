chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveQuote",
    title: "Save Quote",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "saveQuote") {
    chrome.storage.local.get(["quotes"], (result) => {
      const quotes = result.quotes || [];

      quotes.push({
        text: info.selectionText,
        url: info.pageUrl,
        date: new Date().toLocaleString()
      });

      chrome.storage.local.set({ quotes: quotes });
    });
  }
});
