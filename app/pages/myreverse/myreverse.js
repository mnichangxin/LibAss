// myreverse.js
var common = require('../utils/getDateStr.js');
var getToken = require('../utils/getToken.js');

Page({

  // 页面初始数据
  data: {
    myreverse: [],
    condition: true
  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Reserve_yds.action',
      data: {
        token: getToken.getToken()
      },
      success: function (res) {
        if (that.data.length == 0) {
          that.setData({
            condition: false
          });
        } else {
          that.setData({
            myreverse: res.data
          });
        }
      }
    });    
  }
});