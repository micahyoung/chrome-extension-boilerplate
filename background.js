(function() {
  chrome.browserAction.onClicked.addListener(onBrowserActionClick);

  chrome.contextMenus.create({
    "contexts": ["all"],
    "title": "EXTENSION_CONTEXT_MENU_TITLE",
    "onclick": onContextMenuClick
  });

  function onContextMenuClick(info, tab) {
    var requestName = chrome.runtime.id;
    chrome.tabs.sendRequest(tab.id, requestName, onRequestResponse);
  }

  function onBrowserActionClick(tab) {
    var requestName = chrome.runtime.id;
    chrome.tabs.sendRequest(tab.id, requestName, onRequestResponse);
  }

  function onRequestResponse(response) {
    if (response && response["status"] === "ok") {
      console.log("----response----", response);
    } else {
      console.log("request failed");
    }
  }
})();
