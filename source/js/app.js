var headerElement = new Vue({
  el: '#header',
  data: {
    open: false,
  },
})


if (document.getElementById('hero')) {
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
}


if (document.getElementById('profile__title')) {
  new Vivus('profile__title', {
    duration: 100,
    file: '/static/images/profile.svg'
  });
}
