(function(w, d, dl) {
  'use strict';

  // var customerId = d.querySelector("html").getAttribute("data-session");
  var customerId = 'ashauhsua'
  var storeId    = d.scripts["mktplace"].getAttribute("data-store");
  console.log(storeId);

  if(customerId){
    var layer = w[dl][0];
    console.log(layer);

    if (layer.pageCategory === 'Carrinho'){
      var iframeUrl = "https://o.lomadee.com/loc/session/";

      var iframe         = d.createElement("iframe");
      iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
      iframe.width       = 0;
      iframe.height      = 0;
      iframe.frameheight = 0;
      iframe.frameborder = 0;

      d.body.appendChild(iframe);
    }
  }
}(window, document, 'dataLayer'));
