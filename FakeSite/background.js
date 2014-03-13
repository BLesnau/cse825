chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.executeScript({
    code: 'var btn = document.getElementById("myBtn");btn.onclick=function(){alert("HERE I AM")}'
  }); 
});