(function() {
  'use strict';
  var html       = document.querySelector('html');
  var customerId = html.getAttribute('data-session');
  var storeId    = html.getAttribute('data-store');

  if(customerId && dataLayer[0]){
    var layer = dataLayer[0];

    if (layer.pageCategory != 'Carrinho'){
      return;

    } else {
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
})();