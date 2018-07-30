var executeIframe;

var verifyDataLayer = function(){
  var customerId = document.querySelector("html").getAttribute("data-session");
  var storeId    = document.scripts["mktplace"].getAttribute("data-store");
  console.log(customerId);
  console.log(dataLayer);
  if(customerId){
    var layer  = Array.prototype.slice.apply(dataLayer).filter(
      function(data){
        if (data.pageCategory){
          return data;
        }
      }
    )[0];

    var iframe = document.getElementById('iframe_mktplace');
    console.log(iframe);
    console.log(layer);
    if(iframe == null && layer && layer.pageCategory === 'Carrinho'){
      clearInterval(executeIframe);
      var iframeUrl = "https://o.lomadee.com/loc/session/";

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
