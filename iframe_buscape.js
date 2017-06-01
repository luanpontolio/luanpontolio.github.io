var executeIframe;

var verifyDataLayer = (function(d){
  // if(typeof dataLayer === "undefined"){
  //   return;
  // }

  console.log(iframe);
  var customerId = d.querySelector("html").getAttribute("data-session");
  var storeId    = d.scripts["mktplace"].getAttribute("data-store");

  if(customerId){
    var layer  = dataLayer[0];
    var iframe = d.getElementById('iframe_mktplace');

    console.log(iframe);
    console.log(layer);
    if(iframe == null && layer.pageCategory === 'Carrinho'){
      clearInterval(executeIframe);
      var iframeUrl = "https://o.lomadee.com/loc/session/";

      console.log(layer);
      var iframe         = d.createElement("iframe");
      iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
      iframe.id          = "iframe_mktplace";
      iframe.width       = 0;
      iframe.height      = 0;
      iframe.frameheight = 0;
      iframe.frameborder = 0;

      console.log(iframe);
      document.body.appendChild(iframe);
    }
  }
})(document);

executeIframe = setInterval( verifyDataLayer, 3000 );

// var verifyDataLayer = function() {
//   (function ($) {
//     $(document).ready(function(){
//       if(typeof dataLayer === "undefined"){
//         return;
//       }

//       var customerId = document.querySelector("html").getAttribute("data-session");
//       var storeId    = document.scripts["mktplace"].getAttribute("data-store");

//       if(customerId){
//         var layer  = dataLayer[0];
//         var iframe = $('#iframe_mktplace');
//         if(iframe == null && layer.pageCategory === 'Carrinho'){
//           clearInterval(executeIframe);
//           var iframeUrl = "https://o.lomadee.com/loc/session/";

//           var iframe         = document.createElement("iframe");
//           iframe.src         = iframeUrl + storeId + "?customerid=" + customerId;
//           iframe.id          = "iframe_mktplace";
//           iframe.width       = 0;
//           iframe.height      = 0;
//           iframe.frameheight = 0;
//           iframe.frameborder = 0;

//           console.log(iframe);
//           document.body.appendChild(iframe);
//         }
//       }
//     })
//   })(jQuery)
// };

// var executeIframe = setInterval( verifyDataLayer , 3000 );
