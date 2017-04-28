(function(d, s, id) {
  var js, script = d.getElementsByTagName(s)[0];

  if (d.getElementById(id)) return;

  var scripts = d.getElementsByTagName("script");
  var storeId = null;
  for (var i = 0; i < scripts.length; i++) {
    if(scripts[i].getAttribute("src").match('generate_script')){
      var url   = scripts[i].getAttribute("src");
      var param = url.split("?")[1];
      storeId   = param.replace(/storeId=/, "")
    }
  }

  if(storeId){
    js        = d.createElement(s);
    js.id     = id;
    js.async  = true;
    js.src    = "https://luanpontolio.github.io/buscape.js";
    js.setAttribute("data-store", storeId);
    script.parentNode.insertBefore(js, script);
  }

}(document, 'script', 'mktplace'));
