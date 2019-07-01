chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
	function worker() {
		if (window.injected) {
			return;
		}
		window.injected = true;

		console.log ('worker() called')
	}

	// 执行代码
    chrome.tabs.executeScript({
	    code: '(function(){' + worker.toString() + ';worker();})()'
	});
  });
});

// 关闭 tab
chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
	if (confirm('close ' + tab['url'])) {
		chrome.tabs.remove(tab['id'])
	}
  });
});
