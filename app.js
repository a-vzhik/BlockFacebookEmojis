var filters = {
	"urls" : ["<all_urls>"]  
}; 

chrome.webRequest.onCompleted.addListener(
	function(details) {
		var code = { 
			code:"killFuckingEmojis()" 
		};
		chrome.tabs.executeScript(details.tabId, code);			
	}, 
	filters);
