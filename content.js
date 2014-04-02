(function() {
  chrome.extension.onRequest.addListener(function(requestName, sender, sendResponse) {
    if (requestName != chrome.runtime.id) { return; }

    onExtensionRequest();

    sendResponse({
      "status": "ok"
    });
  });

  function onExtensionRequest() {
    console.log("----active element----", document.activeElement);
  }
})();
