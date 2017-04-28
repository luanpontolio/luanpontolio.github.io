(function(d, s, id) {
  var js, script = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) return;

  var attributeValue = Array.prototype.slice.apply(d.scripts).filter(
    function(script){
      return script.src.indexOf('generate_script.js') > -1;
  })[0].attributes['src'].value;

  var url     = attributeValue.split("?")[1];
  var storeId = url.replace(/storeId=/, "");

  js        = d.createElement(s);
  js.id     = id;
  js.async  = true;
  js.src    = "https://luanpontolio.github.io/buscape.js";
  js.setAttribute("data-store", storeId);
  script.parentNode.insertBefore(js, script);

}(document, 'script', 'mktplace'));
