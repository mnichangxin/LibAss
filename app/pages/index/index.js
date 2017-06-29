/* index.js */
var getToken = require('../utils/getToken.js')

// 模态弹框
var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

// 随机ID生成函数
var randomString = function(len) {
　　len = len || 32;

　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = $chars.length;
　　var pwd = '';

　　for (var i = 0; i < len; i++) {
  　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}

　　return pwd;
}

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
  scanTap: function() {
    wx.scanCode({
      success: function(res) {
        console.log(res);
        var result = JSON.parse(res.result);

        // showTip(result.doWhat);

        if (result.doWhat == 'js') {
          wx.request({
            url: 'https://85293008.qcloud.la/wxapp/soft/qrcode_js.action',
            data: {
              token: getToken.getToken(),
              bookId: result.bookId,
              rfid: result.rfid
            },
            success: function(res) {
              if(res.data.code == 0) {
                showTip(res.data.message);
              } else {
                var payId = randomString(8); // 随机字符串

                wx.navigateTo({
                  url: '../pay/pay?token=' + getToken.getToken() + '&rfid=' + result.rfid + '&payId=' + payId 
                });
              }
            },
            fail: function() {
              showTip('fail');
            }
          });
        } else if(result.doWhat == 'cx') {
          wx.navigateTo({
            url: '../detail/detail?id=' + result.bookId
          });
        } else {
          // showTip(result.doWhat);
        }
      },
      fail: function() {
        showTip('fail!');
        console.log('扫码失败！');
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
