// reserve.js
var getDateStr = require('../utils/getDateStr.js');
var isLogin = require('../utils/isLogin.js');
var getToken = require('../utils/getToken.js');

var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

// 随机ID生成函数
var randomString = function (len) {
　　len = len || 32;

　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = $chars.length;
　　var pwd = '';

　　for (var i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}

　　return pwd;
};

Page({
  // 页面初始数据
  data: {
    book: {
      // bookId: '',
      // bookTitle: '百年孤独',
      // bookHolding: 10
    },
    date: '',
    time: '',
    date_start: '',
    date_end: '',
    pay_status: false,
    keyword_status: ['', '', '', '', '', ''],
    keyword_queue: []
  },

  // 支付函数
  pay: function() {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Reserve_order.action',
      data: {
        token: getToken.getToken(),
        bookId: that.data.book.bookId,
        payId: randomString(8),
        date: that.data.date,
        time: that.data.time
      },
      success: function (res) {
        showTip(res.data.message);
        // console.log(res.data);

        if (res.data.data) {
          setTimeout(function () {
            wx.switchTab({
              url: '../index/index'
            });
          }, 1000);
        }
      }
    });

  },

  // 事件处理函数
  onLoad: function (options) {   
    this.setData({
      book: {
        bookId: options.bookId,
        bookTitle: options.bookTitle,
        bookHolding: options.bookHolding
      },
      date_start: getDateStr.getDateStr(0),
      date_end: getDateStr.getDateStr(2)
    });
  },
  dateChange: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  timeChange: function(e) {
    this.setData({
      time: e.detail.value
    });
  },
  subscribeTap: function() {
    var that = this;

    if(this.data.date == '' || this.data.time == '') {
      showTip('预约日期或时间不能为空！');
      return;
    }

    this.setData({
      pay_status: true
    });

    isLogin.isLogin(function() {
      
    }, function() {
      wx.redirectTo({
        url: '../login/login'
      })
    });
  },
  handleClose: function() {
    this.setData({
      pay_status: false
    });
  },

  // 支付输入相关
  handleKey1: function() {
    var that = this;
    
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay(); 
    }
  },
  handleKey2: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(2);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey3: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey4: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey5: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey6: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      showTip('支付成功！');
      this.pay();
    }
  },
  handleKey7: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey8: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey9: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleKey0: function () {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(1);

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)

    if (keyword_queue.length == 6) {
      this.pay();
    }
  },
  handleClear: function() {
    var keyword_queue = this.data.keyword_queue;
    keyword_queue.pop();

    this.setData({
      keyword_queue: keyword_queue
    });

    console.log(this.data.keyword_queue)

    var keyword_status = this.data.keyword_status;

    for (var i = 0; i < 6; i++) {
      keyword_status[i] = '';
    }

    for (var i = 0; i < this.data.keyword_queue.length; i++) {
      keyword_status[i] = '●';
    }

    this.setData({
      keyword_status: keyword_status
    });

    console.log(this.data.keyword_status)
  }

});