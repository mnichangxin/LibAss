// search.js
var getToken = require('../utils/getToken.js');
var pageLoad = require('../utils/pageLoad.js');

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

    that.setData({
      bookName: options.bookName
    });

    var url = 'https://85293008.qcloud.la/wxapp/soft/FindBooks_books.action';

    pageLoad.pageLoad(url, that, {
      bookName: that.data.bookName
    }, true);
  },

  // 上拉加载
  onReachBottom: function () {
    var url = 'https://85293008.qcloud.la/wxapp/soft/FindBooks_books.action';

    pageLoad.pageLoad(url, this, {
      bookName: this.data.bookName
    });
  }

});