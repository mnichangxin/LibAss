/* login.js */
Page({

  // 页面的初始数据
  data: {
    condition: true
  },

  // 事件处理函数
  toReg: function() {
    this.setData({
      condition: false
    });
  },

  toLogin: function() {
    this.setData({
      condition: true
    });
  },

})