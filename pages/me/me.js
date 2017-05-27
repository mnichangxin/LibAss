// me.js
Page({

  // 页面初始数据
  data: {
  
  },

  // 事件处理函数
  onLoad: function (options) {
    // 检查登录态是否过期
    wx.checkSession({
      success: function (res) {
        console.log(res);
      },
      fail: function () {
        wx.login({
          success: function (res) {
            console.log(res.code);
          }
        })
      }
    });
  }

})