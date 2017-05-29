/* 登录组件 */
function login() {
  wx.login({
    success: function (res) {
      wx.request({
        url: 'https://85293008.qcloud.la/weiapp/login',
        data: {
          code: res.code
        },
        success: function (res) {
          wx.clearStorage(); // 清空本地缓存
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

module.exports.login = login;