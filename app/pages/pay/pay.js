// pay.js
var getToken = require('../utils/getToken.js');

var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

Page({
  // 页面初始数据
  data: {
    pay_status: false,
    pay_info: {
      token: '',
      payId: '',
      rfid: ''
    },
    keyword_status: ['', '', '', '', '', ''],
    keyword_queue: []
  },

  // 公共支付函数
  pay: function() {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/qrcode_jspay.action',
      method: 'POST',
      data: {
        // token: that.data.token,
        // rfid: that.data.rfid,
        // payId: that.data.payId
        token: '69a45a03-d6d2-4aa0-a06c-a13f40459106',
        rfid: '',
        payId: ''
      },
      success: function (res) {
        // console.log(res);
        showTip(res);

        // if (res.data.data) {
        //   setTimeout(function () {
        //     wx.switchTab({
        //       url: '../index/index'
        //     });
        //   }, 1000);
        // } 
      },
      fail: function () {
        showTip('支付失败，请重新支付！');
      }
    });
  },

  // 事件处理函数
  onLoad: function (options) {
    this.setData({
      pay_info: {
        token: options.token,
        payId: options.payId,
        rfid: options.rfid
      }
    })
  },
  
  // 支付相关
  handlePay() {
    this.setData({
      pay_status: true
    });
  },
  handleClose() {
    this.setData({
      pay_status: false
    });
  },
  handleKey1: function () {
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
    var that = this;

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(3);

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(4);

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(5);

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(6);

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
  handleKey7: function () {
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(7);

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(8);

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(9);

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
    var that = this;

    var keyword_queue = this.data.keyword_queue;
    keyword_queue.push(0);

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
  handleClear: function () {
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

})