// remind.js
Page({

  // 页面初始数据
  data: {
    book: {
      id: '',
      book_title: '百年孤独',
      holding: 10
    }
  },

  // 事件处理函数
  onLoad: function (options) {
    this.data.book.id = options.id;
    this.setData({
      book: this.data.book
    });
  },
  
  subscribeTap: function() {

  }
})