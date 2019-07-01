chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    chrome.cookies.getAll({"url": tab.url}, function(cookies) {
        chrome.tabs.executeScript({
		    code: 'console.log(' + JSON.stringify(cookies) + ')'
		});
    });
  });
});

