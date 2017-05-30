/* login.js */
var login = require('../utils/login.js');

var appInstance = getApp(); // 获取App实例

Page({
  // 页面的初始数据
  data: {
    condition: true,
    bind_phone: false
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
      condition: true,
      bind_phone: false
    });
  },

  // 表单相关事件
  

  // 调取微信登录
  loginTap: function() {
    var that = this;

    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://85293008.qcloud.la/wxapp/soft/login_weChatCheck.action', // 请求登录的地址
          data: {
            code: res.code
          },
          success: function (res) {
            // token返回空说明未注册，跳转到注册页面；不为空直接登录
            if (res.data.token != null) {
                appInstance.globalData.redirect = true;

                wx.switchTab({
                  url: '../me/me',
                  success: function () {
                    console.log('跳转成功');
                  },
                  fail: function () {
                    console.log('跳转失败');
                  }
                });
            } else {
              that.setData({
                condition: false,
                bind_phone: true
              });
            }
          },
          fail: function () {
            console.log('登录失败');
          }
        });
        console.log('code:' + res.code);
      },
      fail: function () {
        console.log('调用登录接口失败');
      }
    });
  }
});