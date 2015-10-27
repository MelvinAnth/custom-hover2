(function(){
  var options = INSTALL_OPTIONS;

  var applied = {};

  var update = function(){
    var elements = options.elements;

    if (document.body.classList){
      // We only need to remove classes in the preview, which doesn't support IE9 or below,
      // allowing us to use classList here, but not below.
      for (var selector in applied){
        var effects = applied[selector];

        var els = document.querySelectorAll(selector);
        if (!els) continue;

        for (var j=0; j < els.length; j++){
          for (var k=0; k < effects.length; k++){
            els[j].classList.remove("hvr-" + effects[k]);
          }
        }
      }
    }

    applied = {};

    for (var i=0; i < elements.length; i++){
      var el = elements[i];

      var els = document.querySelectorAll(elements[i].selector);
      if (!els) continue;

      applied[el.selector] = applied[el.selector] || [];
      applied[el.selector].push(el.effect);

      for (var j=0; j < els.length; j++){
        els[j].className += " hvr-" + el.effect;
      }
    }
  };

  update();

  var setOptions = function(opts){
    options = opts;

    update();
  };

  window.EagerHover = {
    setOptions: setOptions
  }
})()
