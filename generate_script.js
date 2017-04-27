(function(d, s, id, param) {
  console.log(param);
  var js, script = d.getElementsByTagName(s);
  console.log(script);

  if (d.getElementById(id)) return;

  var storeId = script.src.replace(/.*?\?storeId=/, "");
  console.log(storeId);

  js        = d.createElement(s);
  js.id     = id;
  js.async  = true;
  js.src    = "//luanpontolio.github.io/buscape.js?storeId=" + storeId;
  script.parentNode.insertBefore(js, script);

}(document, 'script', 'mktplace', 'storeId'));
