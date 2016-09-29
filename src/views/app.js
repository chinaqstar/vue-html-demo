import home from './components/home.js'
import hello from './components/hello.js'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/home/:id': {
      component: home
  },
  '/hello': {
      component: hello
  }
})

// router.afterEach(function (transition) {
//   console.log('成功浏览到: ' + transition.to.path)
// })

/**
 * template 用来替换html中的<div id="example" />
 */
var appHtml = `
<div id="app" class="example-nav">
  <nav>
    <div class="nav-title">
      <h2>
        <a href="#">Vue Demo</a></h2>
    </div>
    <ul class="nav-list">
      <li>
        <a v-link="{ path: '/home/1' }">home</a>
      </li>
      <li>
        <a v-link="{ path: '/hello' }">hello</a>
      </li>
    </ul>
  </nav>
</div>
<div class="example-container">
  <!--<component :is="currentView"></component>-->
  <router-view></router-view>
</div>
`;

Vue.config.silent = true;

/**
 *  vue 渲染模板，通过
 *  <component :is="currentView"> 来动态显示view模块
 */
var App = Vue.extend({
  name: 'app',
  template: appHtml,
  data() {
    return {
      currentView: 'home'
    }
  },
  ready() {
    console.log('app', this.currentView)
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
        this.currentView = 'hello';
      }
    }
  }
})

router.start(App, '#example')


/**
 *  挂载dom元素，相当于：
 *  new App().$mount("#example");
 */
// var app = new App({
//   el: '#example'
// })