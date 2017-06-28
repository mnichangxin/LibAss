/* 判断是否登录 */
function isLogin(callback, error) {
  // 检查登录态
  wx.checkSession({
    success: function() {
      // 获取缓存中的token
      wx.getStorage({
        key: 'token',
        success: function(res) {
          if (res.data) {
            // 发送token请求服务端，判断是否登录
            wx.request({
              url: 'https://85293008.qcloud.la/wxapp/soft/login_check.action', // 验证登录地址
              data: {
                token: res.data
              },
              success: function (res) {
                if (res.data.code == 0) {
                  console.log('登录成功');
                  console.log(res.data.status);
                  callback(); // 执行回调函数
                } else {
                  console.log('登录失败，session不一致');
                  console.log(res);
                  error();
                }
              },
              fail: function () {
                console.log('发送请求到服务端失败');
                error();
              }
            });
          } else {
            console.log('缓存中无Session，登录失败');
            error();
          }
        },
        fail: function() {
          console.log('缓存中无Session，登录失败');
          error();
        }
      })
    },
    fail: function() {
      console.log('需要重新拉取登录态');
      error();
    }
  });
}

module.exports.isLogin = isLogin;