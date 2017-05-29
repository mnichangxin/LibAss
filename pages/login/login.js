/* login.js */
var login = require('../utils/login.js');

Page({

  // 页面的初始数据
  data: {
    condition: true
  },

  // 事件处理函数
  onLoad: function() {
 
  },

  // 渲染哪个模板
  toReg: function() {
    this.setData({
      condition: false
    });
  },
  toLogin: function() {
    this.setData({
      condition: true
    });
  },

  // 调取微信登录
  loginTap: function() {
    login.login(function() {
      wx.reLaunch({
        url: './redirect',
        success: function() {
          console.log('跳转成功');
        },
        fail: function() {
          console.log('跳转失败');
        }
      });
    });
  }

});