var verifyDataLayer = function() {
  jQuery(document).ready(function(){
    var _this = this;
    if(typeof dataLayer === "undefined"){
      console.log("entrou akkk");
      return;
    }

    var customerId = _this.querySelector("html").getAttribute("data-session");
    var storeId    = _this.scripts["mktplace"].getAttribute("data-store");

    if(customerId){
      var layer = dataLayer[0];
      console.log(layer);

      if (layer.visitorId && layer.pageCategory === 'Carrinho'){
        var iframeUrl = "https://o.lomadee.com/loc/session/";

        var iframe         = _this.createElement("iframe");
        iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
        iframe.width       = 0;
        iframe.height      = 0;
        iframe.frameheight = 0;
        iframe.frameborder = 0;

        document.body.appendChild(iframe);

        clearInterval(executeIframe);
      }
    }
  });
};

var executeIframe = setInterval(  verifyDataLayer , 3000 );
