import Vue from 'vue';

/**
 * template
 */
var homeHtml = '<div>this is home</div>';

/**
 * 组件home
 */
var home = Vue.component('home', {
  name: 'home',
  template: homeHtml,
  data() { return {} }
})

export default home;
