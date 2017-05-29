/* 判断是否登录 */
function isLogin() {
  // 检查登录态
  wx.checkSession({
    success: function() {
      // 获取缓存中的token
      wx.getStorage({
        key: 'token',
        success: function(res) {
          // 带token请求服务端，判断是否登录
          wx.request({
            url: '',
            data: {
              token: ''
            },
            success: function(res) {
              console.log('登录成功');
              return true;
            },
            fail: function() {
              console.log('发送请求到服务端失败');
              return false;
            }
          })
        },
        fail: function() {
          console.log('缓存中无数据，登录失败');
          return false;
        }
      })
    },
    fail: function() {
      console.log('需要重新拉取登录态');
      return false;
    }
  });
}

module.exports.isLogin = isLogin;