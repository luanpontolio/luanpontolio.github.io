function buscape() {
  'use strict';
  var html       = document.querySelector('html');
  // var customerId = html.getAttribute('data-session');
  var customerId = "asahshajhsj"
  var storeId    = html.getAttribute('data-store');

  if(customerId){
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
}

function loadScript() {
  // var script = document.scripts
  // var url    = script["teste"];
  // var params = url.src.replace(/.*\?params=/, "");
  // alert(params);

  var a    = document.createElement("script");
  a.type   = "text/javascript";
  a.async  = true;
  a.id     = "mktplace_tray";
  a.src    = "#";
  a.onload = this.buscape();
  var b    = document.getElementsByTagName("script")[0];

  b.parentNode.insertBefore(a,b)
}

window.load = loadScript();
