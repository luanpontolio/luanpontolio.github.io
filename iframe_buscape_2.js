var executeIframe;

var verifyDataLayer = function(){
  var html               = document.querySelector("html");
  var customerStoreId    = html.getAttribute("data-session");
  var customerCheckoutId = html.getAttribute("data-checkout-session_id");
  var storeId            = document.scripts["mktplace"].getAttribute("data-store");

  if(customerStoreId || customerCheckoutId){
    var layer  = Array.prototype.slice.apply(dataLayer).filter(
      function(data){
        if (data.pageCategory){
          return data;
        }
      }
    )[0];

    var iframe = document.getElementById('iframe_mktplace');

    if(iframe == null && layer && layer.pageCategory === 'Carrinho'){
      clearInterval(executeIframe);
      var iframeUrl  = "https://o.lomadee.com/loc/session/";
      var customerId = customerStoreId || customerCheckoutId
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
};

executeIframe = setInterval( verifyDataLayer, 3000 );
