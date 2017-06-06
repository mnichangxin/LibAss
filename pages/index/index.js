/* index.js */
var getToken = require('../utils/getToken.js')

var page = 1; // 初始页码

// 分页
function pageLoad(url, scope, object) {
  scope.setData({
    load_condition: true
  });

  // 一次一请求
  wx.request({
    url: url,
    data: Object.assign({
      token: getToken.getToken(),
      page: page,
      pageSize: 1
    }, object),
    success: function (res) {
      var book = scope.data.book;

      if (res.data) {
        book = book.concat(res.data); // 将下一页数据加到队列中

        // 重新渲染
        scope.setData({
          book: book
        });

        console.log(page);

        page++;
      }
    }
  });
}


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
    load_condition: false,
    style: {
      border_raduis: '40rpx'
    }
  },

  // 页面加载
  onLoad: function () {
    var url = 'https://85293008.qcloud.la/wxapp/soft/RecommendBooks.action';
    
    pageLoad(url, this);
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
      url: '../search/search?bookName=' + value,
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
    });
  },

  // 上拉加载
  onReachBottom: function() {
    var url = 'https://85293008.qcloud.la/wxapp/soft/RecommendBooks.action';

    pageLoad(url, this);
  }

});
