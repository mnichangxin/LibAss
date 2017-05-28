/* 判断是否登录 */
function isLogin() {
  wx.checkSession({
    success: function () {
      wx.getStorageInfo({
        success: function(res) {
          if (res.keys.length != 0) {
            var rd_session = wx.getStorageSync(res.keys[0]); 
            wx.request({
              url: 'https://85293008.qcloud.la/weiapp/isLogin',
              method: 'POST',
              data: {
                '3rd_session': res.keys[0]
              },
              success: function(res) {
                if (res.data == 'success') {
                  console.log('success');
                  return true;
                } else {
                  console.log('fail');
                  return false;
                }
              },
              fail: function() {
                return false;
              }
            });
          } else {
            return false;
          }
        },
        fail: function() {
          return false;
        }
      });
    }, 
    fail: function() {
      return false;
    }
  });
}

module.exports.isLogin = isLogin;