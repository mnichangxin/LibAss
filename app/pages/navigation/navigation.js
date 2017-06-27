// navigation.js
var getToken = require('../utils/getToken.js');

Page({
  // 页面初始数据
  data: {
    
  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Linkage_list.action',
      data: {
        token: getToken.getToken()
      },
      success: function(res) {
        console.log(res);
        that.setData({
          primary: res.data
        });    
      }
    });
  },

  focusTap: function() {
    wx.switchTab({
      url: '../index/index'
    })
  }

});