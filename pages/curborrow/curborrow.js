// curborrow.js
var common = require('../utils/getDateStr.js');

Page({

  // 页面初始数据
  data: {
    curborrow: [
      {
        id: 'ISBN9901', // 图书ID
        book_title: '百年孤独', // 图书名称
        borrow_date: '2017-05-01', // 借阅时间
        return_date: '2017-08-01' // 应还日期
      },
      {
        id: 'ISBN9901', // 图书ID
        book_title: '百年孤独', // 图书名称
        borrow_date: '2017-05-01', // 借阅时间
        return_date: '2017-08-01' // 应还日期
      },
      {
        id: 'ISBN9901', // 图书ID
        book_title: '百年孤独', // 图书名称
        borrow_date: '2017-05-01', // 借阅时间
        return_date: '2017-08-01' // 应还日期
      }
    ],
    condition: true
  },

  // 事件处理函数
  onLoad: function (options) {
    if (this.data.curborrow.length == 0) {
      this.setData({
        condition: false
      });
    }
  }
});