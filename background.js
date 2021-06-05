console.log("I am in Background");

chrome.runtime.onConnect.addListener(function(port) {
 port.onMessage.addListener(function(exttension_run) {
console.log("message",exttension_run)

switch(exttension_run.action) {
   case'ExtensionRunning' : 
                         messagegoes(exttension_run)
                         break;

   case 'badges':
                          if (exttension_run.badge) {
                          chrome.browserAction.setBadgeText({ text: exttension_run.badge.text, tabId: exttension_run.badge.tabID });
                          }
                         break;
}
  })
  
})

const messagegoes = (exttension_run) => {
  var RDX= { 
      action: "ExtensionRunning", 
      dataset: exttension_run.exttension
  }
  chrome.tabs.query({
      active: true,
      currentWindow : true
  }, function(tabs) {
      exttension_run.tabID = tabs[0].id;
      chrome.tabs.sendMessage(tabs[0].id, RDX , function(data){
          if (chrome.runtime.lastError) {
          } 
          else {
          }
          console.log("Datataken", RDX);
      })
  })
}
