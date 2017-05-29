/* 登录组件 */
function login() {
  wx.login({
    success: function (res) {
      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/loginWeChatCheck.action',
        data: {
          code: res.code
        },
        success: function (res) {
          wx.setStorage({
            key: 'token',
            data: res.data.token
          });
          console.log('token:' + res.data.token);
        }
      });
      console.log('code:' + res.code);
    }
  });
}

module.exports.login = login;