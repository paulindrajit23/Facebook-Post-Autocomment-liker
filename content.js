console.log("I am in content");

var port = chrome.runtime.connect ({
  name: "ContentScript"
}) 


chrome.runtime.onMessage.addListener (function(RDX){
  console.log("datagoes", RDX);
  switch(RDX.action) {
      case "ExtensionRunning" : Startlike(RDX.dataset)
      break;
  }
  return true;
} ) 


var like = 0;


const Startlike = (RDX ,count=0) => {
  var FBdots = document.querySelector ('div[class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur"]');
    FBdots.className = "l9j0dhe7 ecm0bbzt rz4wbd8a qt6c0cv9 dati1w0a j83agx80 btwxx1t3 lzcic4wl"; 
    if (FBdots.className != "l9j0dhe7 ecm0bbzt rz4wbd8a qt6c0cv9 dati1w0a j83agx80 btwxx1t3 lzcic4wl"){ 
         console.log("Hiiiiiiiiiiiiii"); 
         const TimerSet = RDX.Timedata;
         var timeoutInterval=setTimeout(() => {
         var facebooklike = document.querySelector ('div[aria-label="Like"]');
         facebooklike.click();
         like++;
         notifyUser(RDX,like);
         Startlike(RDX,count+1)
         }, TimerSet );
    }
    
  else {
      return false;
  }
} 




const notifyUser = (exttension_run,count = 0) => {
  const sentCount = count;
 

    exttension_run = {
      action: "badges",
      badge: {
        tabID: exttension_run.tabID,
        text: sentCount.toString(),
      }
    };
  
  port.postMessage(exttension_run);
};