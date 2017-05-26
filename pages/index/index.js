/* index.js */

// 获取应用实例
var app = getApp()

Page({
  data: {
    book: [
      {
        id: '0001', // 唯一ID
        img_src: '../static/images/book1.jpg', // 图片路径
        book_title: '百年孤独', // 图书名称
        book_author: '[哥伦比亚] 加西亚·马尔克斯', // 图书作者
        book_category: '小说/名著' // 图书分类
      },
      {
        id: '0002', 
        img_src: '../static/images/book1.jpg',
        book_title: '百年孤独', 
        book_author: '[哥伦比亚] 加西亚·马尔克斯', 
        book_category: '小说/名著'
      },
      {
        id: '0003',
        img_src: '../static/images/book1.jpg',
        book_title: '百年孤独', 
        book_author: '[哥伦比亚] 加西亚·马尔克斯', 
        book_category: '小说/名著'
      }
    ]
  },

  //事件处理函数
  scanTap: function() {
    wx.scanCode({
      success: function() {
        onlyFromCamera: true
      }
    });
  },

  onLoad: function () {
    var that = this

    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //   })
    // })
  }

});
