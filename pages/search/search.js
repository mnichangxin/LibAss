// search.js
var getToken = require('../utils/getToken.js');

Page({
  // 页面初始数据
  data: {
    bookName: '',
    book: [

    ]
  },

  // 事件监听程序
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/FindBooks_books.action',
      data: {
        token: getToken.getToken(),
        bookName: options.bookName,
        page: 1,
        pageSize: 5
      },
      success: function (res) {
        that.setData({
          bookName: options.bookName,
          book: res.data
        });
      }
    });
  }

});