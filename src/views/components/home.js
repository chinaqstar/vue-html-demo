define('home', function(module) {
  /**
   * template
   */
  var homeHtml = '<div>this is home</div>';

  /**
   * 组件home
   */
  home = Vue.component('home', {
    name: 'home',
    template: homeHtml,
    data() { return {} }
  })

  return home;
})
