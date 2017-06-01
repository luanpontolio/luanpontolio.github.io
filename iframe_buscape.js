var verifyDataLayer = function() {
  $(function(){
    var _this = this;
    if(typeof dataLayer === "undefined"){
      return;
    }

    var customerId = _this.querySelector("html").getAttribute("data-session");
    var storeId    = _this.scripts["mktplace"].getAttribute("data-store");

    if(customerId){
      var layer  = dataLayer[0];
      var iframe = _this.getElementById('iframe_mktplace');
      if(iframe == null && layer.visitorId && layer.pageCategory === 'Carrinho'){
        clearInterval(executeIframe);
        var iframeUrl = "https://o.lomadee.com/loc/session/";

        var iframe         = _this.createElement("iframe");
        iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
        iframe.id          = "iframe_mktplace";
        iframe.width       = 0;
        iframe.height      = 0;
        iframe.frameheight = 0;
        iframe.frameborder = 0;

        document.body.appendChild(iframe);
      }
    }
  })(jQuery);
};

var executeIframe = setInterval( verifyDataLayer , 3000 );
