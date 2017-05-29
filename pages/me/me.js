// me.js
var isLogin = require('../utils/isLogin.js');
var login = require('../utils/login.js');

var appInstance = getApp(); // 获取App实例

Page({

  // 页面初始数据
  data: {
    user_info: {
      nick_name: '',
      avatar_url: ''
    },
    condition: false
  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    // 根据是否登录渲染不同的数据
    isLogin.isLogin(function () { // 请求用户信息，成功的回调
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            user_info: {
              nick_name: res.userInfo.nickName,
              avatar_url: res.userInfo.avatarUrl,
            },
            condition: true
          });
        }
      });
    });
  },

  onShow: function() {
    if (appInstance.globalData.redirect) {
      login.login(function() {

      });
      
      appInstance.globalData.redirect = false;
      
      this.setData({
        condition: true
      });
    }
  },

  exitLogin: function() {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/login_exit.action',
      data: {
        token: wx.getStorageSync('token')
      },
      success: function(res) {
        wx.setStorage({
          key: 'token',
          data: res.data.token
        });
        that.setData({
          condition: false
        });
        console.log('退出登录成功');
      },
      fail: function() {
        console.log('退出登录失败');
      }
    });
  }

});