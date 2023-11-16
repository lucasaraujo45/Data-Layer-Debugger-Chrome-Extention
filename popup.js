document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleDebug');
    toggleButton.addEventListener('click', function() {
      chrome.storage.sync.get('debugMode', (data) => {
        const newDebugMode = !data.debugMode;
        chrome.storage.sync.set({ debugMode: newDebugMode });
      });
    });
  });
  