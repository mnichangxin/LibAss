// me.js
var isLogin = require('../utils/isLogin.js');

Page({

  // 页面初始数据
  data: {
  
  },

  // 事件处理函数
  onLoad: function (options) {
    // 判断是否登录
    isLogin.isLogin();
  }
})