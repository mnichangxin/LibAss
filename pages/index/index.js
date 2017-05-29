/* index.js */
var module1 = require('../utils/isLogin.js');
var module2 = require('../utils/login.js');

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
    if (module1.isLogin()) {
      wx.request({
        url: '',
        data: {
          data: {
            token: '',
            page: 1,
            pageSize: 5
          }
        }
      });
    } else {
      wx.request({
        url: '',
        data: {
          
        }
      });
    }
  },

  // 扫码
  scanTap: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success: function (res) {
        
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
  searchTap: function(e) {
    var queue = this.data.search_history;
    var value = e.detail.value.trim();

    if (value != '') {
      if (queue.indexOf(value) == -1) {
        queue.push(value);
      }    
    } else {
      return;
    }

    if (!this.data.search_data.isHos) {
      this.data.search_data.isHos = true;
    }

    this.setData({
      search_history: queue,
      search_data: this.data.search_data,
    });

    wx.navigateTo({
      url: '../query/query?query_name=' + value
    });
  },
  clearTap: function() {
    this.data.search_data.isHos = false;
    this.setData({
      search_data: this.data.search_data,
      search_history: []
    });
  }

});
