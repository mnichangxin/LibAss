// myreverse.js
var common = require('../utils/getDateStr.js');

Page({

  // 页面初始数据
  data: {
    myreverse: [
      {
        id: 'ISBN9901', // 图书ID
        book_title: '百年孤独', // 图书名称
        reverser_date: '2017-05-01', // 预订时间
        get_date: '2017-05-03' // 应取日期
      }
    ],
    condition: true
  },

  // 事件处理函数
  onLoad: function (options) {
    if (this.data.myreverse.length == 0) {
      this.setData({
        condition: false
      });
    }
  }
});