(function($) {
  $(document).ready(function(){
    var _this = this;
    if(typeof dataLayer === "undefined"){
      return;
    }

    // var customerId = _this.querySelector("html").getAttribute("data-session");
    var customerId = "ashaushua";
    var storeId    = _this.scripts["mktplace"].getAttribute("data-store");

    if(customerId){
      var layer = window[dataLayer[0]];

      if (layer.pageCategory === 'Carrinho'){
        var iframeUrl = "https://o.lomadee.com/loc/session/";

        var iframe         = _this.createElement("iframe");
        iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
        iframe.width       = 0;
        iframe.height      = 0;
        iframe.frameheight = 0;
        iframe.frameborder = 0;

        document.body.appendChild(iframe);
      }
    }
  });
}(jQuery));
