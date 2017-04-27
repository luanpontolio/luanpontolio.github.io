(function(d, s, id) {
  var js, script = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) return;

  var storeId = script.src.replace(/.*?\?storeId=/, "");

  js        = d.createElement(s);
  js.id     = id;
  js.async  = true;
  js.src    = "//luanpontolio.github.io/buscape.js?storeId=" + storeId;
  script.parentNode.insertBefore(js, script);

}(document, 'script', 'mktplace'));
