(function() {
  'use strict';

  jQuery(document).ready(function(){

    if(typeof dataLayer === "undefined"){
      return;
    }

    // var customerId = document.querySelector("html").getAttribute("data-session");
    var customerId = 'ashauhsua'
    var storeId    = document.scripts["mktplace"].getAttribute("data-store");

    if(customerId){
      var layer = dataLayer[0];

      if (layer.pageCategory === 'Carrinho'){
        var iframeUrl = "https://o.lomadee.com/loc/session/";

        var iframe         = document.createElement("iframe");
        iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
        iframe.width       = 0;
        iframe.height      = 0;
        iframe.frameheight = 0;
        iframe.frameborder = 0;

        document.body.appendChild(iframe);
      }
    }
  });
})(jQuery);
