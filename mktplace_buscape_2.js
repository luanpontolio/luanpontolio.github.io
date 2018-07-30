(function(d, s, id) {
  var js, script = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) return;

  var attributeValue = Array.prototype.slice.apply(d.scripts).filter(
    function(script){
      return script.src.indexOf('mktplace_buscape_2.js') > -1;
  })[0].attributes['src'].value;

  var url     = attributeValue.split("?")[1];
  var storeId = url.replace(/storeId=/, "");

  js        = d.createElement(s);
  js.id     = id;
  js.async  = 0;
  js.src    = "https://luanpontolio.github.io/iframe_buscape_2.js";
  js.setAttribute("data-store", storeId);
  script.parentNode.insertBefore(js, script);

}(document, 'script', 'mktplace'));
