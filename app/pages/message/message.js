// message.js
var getToken = require('../utils/getToken.js');

Page({

  // 页面初始数据
  data: {
    list: [
      {
        id: '0001',
        title: '通知类消息',
        body: 'Hello World！',
        date: '2017-06-28 13:57'
      },
      {
        id: '0001',
        title: '通知类消息',
        body: 'Hello World！',
        date: '2017-06-28 13:57'
      },
      {
        id: '0001',
        title: '通知类消息',
        body: 'Hello World！',
        date: '2017-06-28 13:57'
      }
    ]
  },

  // 事件处理函数
  onLoad: function (options) {
    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/message_update.action',
      data: {
        token: getToken.getToken(),
        count: 0
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})