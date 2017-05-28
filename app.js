//app.js
App({
  onLaunch: function () {
    // //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    wx.login({
      success: function(res) {
        wx.request({
          url: 'https://85293008.qcloud.la/weiapp/login',
          data: {
            code: res.code
          },
          success: function(res) {
            for (var k in res.data) {
              wx.setStorage({
                key: k,
                data: res.data[k],
              });
            }
            console.log(res.data);
          }
        });
      }
    });
  }
});