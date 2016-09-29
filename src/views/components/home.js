
/**
 * template
 */
var homeHtml = `
<div id="home">this is <style="color: red;">home</div>
`;

/**
 * 组件home
 */
var home = Vue.component('home', {
  route: {
    canReuse(transition) {
      console.log('canReuse')
      return true
    },
    canActivate(transition) {
      console.log('canActivate')
      transition.next()
    },
    activate(transition) {
      console.log('activate')
      transition.next()
    },
    data(transition) {
      console.log('data')
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('数据加载完成 ok')
          resolve()
        }, 3000)
      }).then(() => {
        return {
          'q': '1'
        }
      })
      transition.next()
    },
    waitForData: true
  },
  name: 'home',
  template: homeHtml,
  data() {
    return {
      abc: '122',
      toggle: false
    }
  }
})

export default home;
