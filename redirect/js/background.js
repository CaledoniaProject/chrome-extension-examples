chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.getSelected(null, function(e) {
    // 当URL包含 gogogo 就重定向
    if (e.url.indexOf("?hello") !== -1) {
      chrome.tabs.update({
        url: 'https://www.baidu.com/?world'
      })
    }
  });
});
