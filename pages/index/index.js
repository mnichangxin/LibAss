/* index.js */

Page({

  // 初始化数据
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
    ],
    search_history: [
      '百年孤独', '白夜行', '摆渡人'
    ],
    search_data: {
      condition: false,
      isHos: true,
    },
    style: {
      border_raduis: '40rpx'
    }
  },

  // 页面加载
  onLoad: function () {
    
  },

  // 扫码
  scanTap: function () {
    wx.scanCode({
      success: function () {
        onlyFromCamera: true
      }
    });
  },

  // 搜索框事件
  focusTap: function() {
    this.data.search_data.condition = true;
    this.setData({
      search_data: this.data.search_data,
      style: {
        border_raduis: '0'
      }
    });
  },
  blurTap: function() {
    this.data.search_data.condition = false;
    this.setData({
      search_data: this.data.search_data,
      style: {
        border_raduis: '40rpx'
      }
    });
  },
  searchTap: function() {
    
  },
  clearTap: function() {
    this.data.search_data.isHos = false;
    this.setData({
      search_data: this.data.search_data,
      search_hository: []
    });
  }

});
