chrome.storage.sync.get('debugMode', (data) => {
    if (data.debugMode) {
      (function() {
        var oldPush = dataLayer.push;
        dataLayer.push = function() {
          console.log(arguments);
          return oldPush.apply(dataLayer, arguments);
        };
      })();
      console.log(dataLayer);
    }
  });
  