// messageDetail.js

Page({
  // 页面初始数据
  data: {
    title: '',
    body: ''
  },

  //事件处理函数
  onLoad: function (options) {
    this.setData({
      title: options.title,
      body: options.body
    });
  }

})