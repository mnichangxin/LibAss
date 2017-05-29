// redirect.js
Page({

  // 页面初始数据
  data: {
  
  },

  // 事件处理函数
  onLoad: function (options) {
    wx.switchTab({
      url: '../me/me',
      success: function() {
        console.log('跳转成功');
      },
      fail: function() {
        console.log('跳转失败');
      }
    });
  }

})