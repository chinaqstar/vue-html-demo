// import Vue from 'vue';

/**
 * template
 */
var helloHtml = `
<div id="hello">hello</div>
`;

/**
 * 组件hello
 */
var hello = Vue.component('hello', function(resolve, reject) {

  // 这里的resolve相当于 Vue.extend，
  // 作用：解决异步加载组件问题
  // 原因：可以等到 hello组件加载完成再，正式去Vue.extend
  resolve({
    name: 'hello',
    template: helloHtml,
    data() { return {} },
    ready() {
      console.log('hello ready.');
    }
  })
})

export default hello;
