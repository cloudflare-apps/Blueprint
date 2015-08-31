(function(){
  if (!document.documentElement.setAttribute || !window.getComputedStyle || !document.documentElement.classList) {
    return;
  }

  document.documentElement.setAttribute('data-eager-blueprint', true);

  document.addEventListener('DOMContentLoaded', function(){
    var el, toggle;

    el = document.createElement('eager-blueprint-toggle');
    el.innerHTML = '<input id="eager-blueprint-toggle" type="checkbox" checked="true"><label for="eager-blueprint-toggle"></label>';
    toggle = el.querySelector('input[type="checkbox"]');

    toggle.addEventListener('click', function(){
      document.documentElement.setAttribute('data-eager-blueprint', toggle.checked);
    });

    document.documentElement.appendChild(el);

    Array.prototype.forEach.call(document.querySelectorAll('*'), function(node) {
      var style = getComputedStyle(node);

      if (style.backgroundImage !== 'none') {
        node.classList.add('blueprint-filtered');
      }

      if (parseInt(style.fontSize, 10) >= 20) {
        node.classList.add('blueprint-text-stroked');
      }
    });
  });
})();
