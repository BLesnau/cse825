chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab ) {
   if ( tab.status == "complete" && tab.url.indexOf( "google.com" ) != -1 ) {
      chrome.tabs.executeScript( tabId, { file: "replaceGoogle.js" } );
   }
} );