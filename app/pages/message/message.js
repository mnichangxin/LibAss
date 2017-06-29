// message.js
var getToken = require('../utils/getToken.js');

// 消息已读数字
var count = 0;

Page({

  // 页面初始数据
  data: {
    list: [
      // {
      //   id: '0001',
      //   title: '通知类消息',
      //   body: '还是之前提供的x86_64操作系统平台上，运行Tomcat并启动https的问题。就像日志中描述的，在我的测试环境中部署非常顺利，几乎就没有遇到什么障碍。但把操作过程告知用户，结果访问https://ip:8443/时，就报错，最终无法连接。今天特到现场看看故障情况，经排查原来是用户的Oracle环境变量导致的，去掉有问题的变量后，https启动正常。',
      //   date: '2017-06-28 13:57'
      // },
      // {
      //   id: '0001',
      //   title: '通知类消息',
      //   body: 'Hello World！',
      //   date: '2017-06-28 13:57'
      // },
      // {
      //   id: '0001',
      //   title: '通知类消息',
      //   body: 'Hello World！',
      //   date: '2017-06-28 13:57'
      // }
    ]
  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    // 第一次请求
    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/message_update.action',
      data: {
        token: getToken.getToken(),
        count: 0
      },
      success: function(res) {
        console.log(res.data);

        that.setData({
          list: res.data.messages
        });

        count = res.data.count;
      }
    })

    // 五分钟一轮询
    // setInterval(function() {
    //   wx.request({
    //     url: 'https://85293008.qcloud.la/wxapp/soft/message_update.action',
    //     data: {
    //       token: getToken.getToken(),
    //       count: count
    //     },
    //     success: function(res) {
    //       var list = that.list.concat(res.data.message)

    //       that.setData({
    //         list: list
    //       });
    //     }
    //   });
    // }, 30000);
  }
  
})