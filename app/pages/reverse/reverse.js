// reserve.js
var getDateStr = require('../utils/getDateStr.js');
var isLogin = require('../utils/isLogin.js');
var getToken = require('../utils/getToken.js');

Page({
  // 页面初始数据
  data: {
    book: {
      // bookId: '',
      // bookTitle: '百年孤独',
      // bookHolding: 10
    },
    date: '仅能预约当前三天',
    time: '仅能预约开馆时间',
    date_start: '',
    date_end: ''
  },

  // 事件处理函数
  onLoad: function (options) {   
    this.setData({
      book: {
        bookId: options.bookId,
        bookTitle: options.bookTitle,
        bookHolding: options.bookHolding
      },
      date_start: getDateStr.getDateStr(0),
      date_end: getDateStr.getDateStr(2)
    });
  },
  dateChange: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  timeChange: function(e) {
    this.setData({
      time: e.detail.value
    });
  },
  subscribeTap: function() {
    var that = this;

    isLogin.isLogin(function() {
      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/Reserve_order.action',
        data: {
          token: getToken.getToken(),
          bookId: that.data.book.bookId,
          payId: '', // !!押金信息
          date: that.data.date_start,
          time: that.data.data_time
        },
        success: function(res) {
          console.log(res);
        }
      });
    }, function() {
      wx.redirectTo({
        url: '../login/login'
      })
    });
  }

});