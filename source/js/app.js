var headerElement = new Vue({
  el: '#header',
  data: {
    open: false,
  },
})

var heroElement = new Vue({
  el: '#hero',
  data: {
    loaded: false,
  }
})


new Vivus('hero__container', {
  duration: 200,
  file: '/static/images/logo.svg'
}, function() {
  heroElement.loaded = true;
});
