var koa = require('koa');
var app = koa();
var sendFile = require('koa-sendfile');
var serve = require('koa-static');
var route = require('koa-route');
var path = require('path');

// log
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s %s %sms', this.method, this.url, this.status, ms);
})

// render html
app.use(route.get('/', function *() {
  // this.body = yield render('index');
  var status = yield sendFile(this, __dirname + '/index.html');
}));

// static
app.use(serve(path.join(__dirname, './dist')));

// start server, listen on 3999
app.listen(3999, '0.0.0.0', function() {
  console.log('start listen on port 3999');
});
