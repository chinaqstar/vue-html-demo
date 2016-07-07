var App = Vue.extend({
  template: '<hello></hello>',
  components: {
    'hello': {
      template: '<div>hello world.</div>'
    }
  }
})

new App({
  el: '#example'
})
