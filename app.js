//app.js
var common = require('./pages/utils/isLogin.js');

App({
  onLaunch: function () {
    common.isLogin(); 
  }
});