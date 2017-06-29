// borrow.js
var getToken = require('../utils/getToken.js')

Page({

  // 页面初始数据
  data: {
    curborrow: [],
    condition: true
  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Reserve_jys.action',
      data: {
        token: getToken.getToken()
      },
      success: function(res) {
        console.log(res.data)
        if (that.data.length == 0) {
          that.setData({
            condition: false
          });
        } else {
          that.setData({
            curborrow: res.data
          });
        }
      }
    });
  }
});