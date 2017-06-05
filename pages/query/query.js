// query.js
var getToken = require('../utils/getToken.js');
var pageLoad = require('../utils/pageLoad.js');

Page({
  // 页面初始数据
  thirdName: '',
  data: {
    book: [
    
    ],
    thirdId: '',
    thirdName: ''
  },

  onLoad: function(options) {
    var that = this;

    that.setData({
      thirdId: options.id,
      thirdName: options.thirdName
    });

    var url = 'https://85293008.qcloud.la/wxapp/soft/Linkage_books.action';

    pageLoad.pageLoad(url, that, {
      thridId: that.data.thirdId
    });
  },

  // 上拉加载
  onReachBottom: function () {
    var url = 'https://85293008.qcloud.la/wxapp/soft/Linkage_books.action';

    pageLoad.pageLoad(url, this, {
      thridId: this.data.thirdId
    });
  }
});