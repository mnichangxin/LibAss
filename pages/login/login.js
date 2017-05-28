/* login.js */
Page({

  // 页面的初始数据
  data: {
    condition: true
  },

  // 事件处理函数
  onLoad: function() {
    // wx.checkSession({
    //   success: function() {
    //     console.log('登录成功！');
    //   },
    //   fail: function() {
    //     console.log('登录失败！');
    //   }
    // })
  },

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