// me.js
var isLogin = require('../utils/isLogin.js');

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

    // 请求用户信息
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          user_info: {
            nick_name: res.userInfo.nickName,
            avatar_url: res.userInfo.avatarUrl
          }
        });
      }
    });

    // // 根据是否登录渲染不同的数据
    // if (isLogin.isLogin()) {

    // }
  }

});