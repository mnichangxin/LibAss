// remind.js
var isLogin = require('../utils/isLogin.js');
var getToken = require('../utils/getToken.js');

var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

Page({
  // 页面初始数据
  data: {
    book: {
      // id: '',
      // book_title: '百年孤独',
      // holding: 0
    }
  },

  // 事件处理函数
  onLoad: function (options) {
    this.setData({
      book: {
        bookId: options.bookId,
        bookTitle: options.bookTitle,
        bookHolding: options.bookHolding
      }
    });
  },
  
  subscribeTap: function() {
    var that = this;

    isLogin.isLogin(function () {
      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/Reserve_order.action',
        data: {
          token: getToken.getToken(),
          bookId: that.data.book.bookId,
        },
        success: function (res) {
          if (res.data.data) {
            showTip(res.data.message);
          } else {
            showTip(res.data.message);
          }
        }
      });
    }, function () {
      wx.redirectTo({
        url: '../login/login'
      })
    });
  }
})