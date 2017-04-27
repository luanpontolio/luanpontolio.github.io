// function buscape() {

//   var html       = document.querySelector('html');
//   var customerId = "asahshajhsj"
//   var storeId = html.getAttribute('data-store');

//   if(customerId){
//     var layer = dataLayer[0];

//     if (layer.pageCategory != 'Carrinho'){
//       return;

//     } else {
//       var iframeUrl = "https://o.lomadee.com/loc/session/";

//       var iframe         = document.createElement("iframe");
//       iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
//       iframe.width       = 0;
//       iframe.height      = 0;

//       document.body.appendChild(iframe);
//     }
//   }
// };

(function(d, s, id) {
  var js, script = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) return;

  var storeId = d.querySelector('html').getAttribute('data-store');

  js        = d.createElement(s);
  js.id     = id;
  js.async  = true;
  js.src    = "https://luanpontolio.github.io/buscape.js?storeId=" + storeId;
  script.parentNode.insertBefore(js, script);

}(document, 'script', 'mltplace_tray'));

