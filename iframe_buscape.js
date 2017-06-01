var verifyDataLayer = function() {
  (function(){
    if(typeof dataLayer === "undefined"){
      return;
    }

    var customerId = document.querySelector("html").getAttribute("data-session");
    var storeId    = document.scripts["mktplace"].getAttribute("data-store");

    if(customerId){
      var layer  = dataLayer[0];
      var iframe = document.getElementById('iframe_mktplace');
      if(iframe == null && layer.visitorId && layer.pageCategory === 'Carrinho'){
        clearInterval(executeIframe);
        var iframeUrl = "https://o.lomadee.com/loc/session/";

        var iframe         = document.createElement("iframe");
        iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
        iframe.id          = "iframe_mktplace";
        iframe.width       = 0;
        iframe.height      = 0;
        iframe.frameheight = 0;
        iframe.frameborder = 0;

        document.body.appendChild(iframe);
      }
    }
  })();
};

var executeIframe = setInterval( verifyDataLayer , 3000 );
