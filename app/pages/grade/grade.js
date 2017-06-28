// grade.js
var getToken = require('../utils/getToken.js');

Page({

  // 页面初始数据
  data: {
  
  },

  // 事件处理函数
  onLoad: function () {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/user_jurisdiction.action',
      data: {
        token: getToken.getToken()
      },
      success: function(res) {
        // that.setData({
        //   grade: {
        //     bookCount: "2",
        //     creditScore: "70",
        //     takeTime: "30",
        //     vip: "普通会员"
        //   }
        // });
        that.setData({
          grade: {
            bookCount: res.data.bookCount,
            creditScore: res.data.creditScore,
            takeTime: res.data.takeTime,
            vip: res.data.vip
          }
        });
      }
    });
  }

})