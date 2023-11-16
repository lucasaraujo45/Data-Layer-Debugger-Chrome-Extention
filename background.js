chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ debugMode: false });
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.storage.sync.get('debugMode', (data) => {
      const newDebugMode = !data.debugMode;
      chrome.storage.sync.set({ debugMode: newDebugMode });
  
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
    });
  });
  