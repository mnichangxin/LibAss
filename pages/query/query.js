// query.js
var getToken = require('../utils/getToken.js');

Page({
  // 页面初始数据
  thirdName: '',
  data: {
    book: [
      // {
      //   id: '0001', // 图书ID
      //   img_src: '../static/images/book1.jpg', // 图片路径
      //   book_title: '百年孤独', // 图书名称
      //   book_author: '[哥伦比亚] 加西亚·马尔克斯', // 图书作者
      //   book_category: '小说/名著' // 图书分类
      // },
      // {
      //   id: '0002',
      //   img_src: '../static/images/book1.jpg',
      //   book_title: '百年孤独',
      //   book_author: '[哥伦比亚] 加西亚·马尔克斯',
      //   book_category: '小说/名著'
      // },
      // {
      //   id: '0003',
      //   img_src: '../static/images/book1.jpg',
      //   book_title: '百年孤独',
      //   book_author: '[哥伦比亚] 加西亚·马尔克斯',
      //   book_category: '小说/名著'
      // }
    ]
  },

  onLoad: function(options) {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Linkage_books.action',
      data: {
        token: getToken.getToken(),
        thirdId: options.id,
        page: 1,
        pageSize: 5
      },
      success: function(res) {
        that.setData({
          thirdName: options.thirdName,
          book: res.data
        });
      }
    });

  }
});