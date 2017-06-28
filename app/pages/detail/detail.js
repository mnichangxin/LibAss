// detail.js
var getToken = require('../utils/getToken.js');

Page({

  // 页面初始数据
  data: {

  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    console.log(options.id)

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/FindBooks_book.action',
      data: {
        token: getToken.getToken(),
        bookId: options.id
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          book: res.data
        });
      }
    });
  }

})