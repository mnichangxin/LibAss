// me.js
var common = require('../utils/login.js');

Page({

  // 页面初始数据
  data: {
  
  },

  // 事件处理函数
  onLoad: function (options) {
    common.login();
  }

})