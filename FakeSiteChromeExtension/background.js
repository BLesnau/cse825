chrome.tabs.onUpdated.addListener( function ( tabId, changeInfo, tab ) {
   if ( tab.status == "complete" && tab.url.indexOf( "facebook" ) != -1 ) {
      chrome.tabs.executeScript( tabId, { file: "fakeFacebook.js" } );
   }
} );