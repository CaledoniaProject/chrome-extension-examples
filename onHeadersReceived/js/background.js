chrome.webRequest.onHeadersReceived.addListener(function(e) {
	var headers = e.responseHeaders
	chrome.tabs.executeScript({
	    code: 'console.log(' + JSON.stringify(headers) + ')'
	});
}, {urls: ["<all_urls>"]}, ["responseHeaders"]);