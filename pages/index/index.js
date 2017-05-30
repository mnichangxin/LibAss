/* index.js */
// var isLogin = require('../utils/isLogin.js');
// var login = require('../utils/login.js');
var getToken = require('../utils/getToken.js')

Page({
  // 初始化数据
  data: {
    book: [

    ],
    searchHistory: [
      
    ],
    search_data: {
      condition: false,
      isHos: true,
    },
    input_value: '',
    style: {
      border_raduis: '40rpx'
    }
  },

  // 页面加载
  onLoad: function () {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/RecommendBooks.action',
      data: {
        token: getToken.getToken(),
        page: 1,
        pageSize: 5
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          book: res.data
        });
      }
    });
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
    var that = this;

    this.data.search_data.condition = true;
    this.setData({
      search_data: this.data.search_data,
      style: {
        border_raduis: '0'
      }
    });

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Historical_request.action',
      data: {
        token: getToken.getToken
      },
      success: function(res) {
        that.setData({
          searchHistory: res.data
        });
      }
    })
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
  inputTap: function(e) {
    this.setData({
      input_value: e.detail.value
    });
  },
  searchTap: function(e) {
    var queue = this.data.searchHistory;
    var value = this.data.input_value.trim();
    
    var that = this;

    if (value != '') {
      if (queue.indexOf(value) == -1) {
        queue.push(value);

        // wx.request({
        //   url: 'https://85293008.qcloud.la/wxapp/soft/FindBooks_books.action',
        //   data: {
        //     token: getToken.getToken(),
        //     bookName: value,
        //     page: 1,
        //     pageSize: 5
        //   },
        //   success: function(res) {
            
        //   }
        // });
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
      url: '../query/query?query_name=' + value,
      success: function() {
        console.log('success');
      },
      fail: function() {
        console.log('fail');
      }
    });
  },
  clearTap: function() {
    var that = this;

    this.data.search_data.isHos = false;
    this.setData({
      search_data: this.data.search_data
    });

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Historical_delete.action',
      data: {
        token: getToken.getToken()
      },
      success: function(res) {
        that.setData({
          searchHistory: []
        });
      } 
    })
  },

  // 上拉加载
  // onReachBottom: function() {
  //   wx.request({
  //     url: 'https://85293008.qcloud.la/wxapp/soft/RecommendBooks.action',
  //     data: {

  //     }
  //   })
  // }

});
