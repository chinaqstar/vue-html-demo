// template 用来替换html中的<div id="example" />
var appHtml = '<div class="example-nav"><nav><div class="nav-title"><h2><a href="#">Vue Demo</a></h2></div><ul class="nav-list"><li><a @click.prevent="listClick(\'home\', $event)">home</a></li><li><a @click.prevent="listClick(\'hello\', $event)">hello</a></li></ul></nav></div><div class="example-container"><component :is="currentView"></component></div>';

// 组件home
var home = Vue.component('home', {
  name: 'home',
  template: '<div>this is home</div>',
  data() { return {} }
})

// 组件hello
var hello = Vue.component('hello', function(resolve, reject) {
  // 这里的resolve相当于 Vue.extend，
  // 作用：解决异步加载组件问题
  // 原因：可以等到 hello组件加载完成再，正式去Vue.extend
  resolve({
    name: 'hello',
    template: '<div>hello</div>',
    data() { return {} }
  })
})

// vue 渲染模板，通过
// <component :is="currentView"> 来动态显示view模块
var App = Vue.extend({
  name: 'app',
  template: appHtml,
  data() {
    return {
      currentView: 'home'
    }
  },
  components: {
    home,
    hello,
  },
  methods: {
    listClick(code, e) {
      if(code == 'home') {
        this.currentView = 'home';
      } else if(code == 'hello') {
        console.log('hello');
        this.currentView = 'hello';
      }
    }
  }
})

// 挂载dom元素，相当于：
// new App().$mount("#example");
var app = new App({
  el: '#example'
})
