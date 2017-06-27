// publish.js
var isLogin = require('../utils/isLogin.js')

Page({
  // 页面初始数据
  data: {
    input_value: '',
    button_condition: true
  },

  // 事件处理函数
  onLoad: function (options) {  

  },

  inputEvent: function(event) {
    var value = event.detail.value;

    this.setData({
      input_value: value
    });

    if (value == '') {
      this.setData({
        button_condition: true
      });
    } else {
      this.setData({
        button_condition: false
      });
    }
  },
  handleSend: function() {
    isLogin.isLogin(function() {
      wx.getUserInfo({
        success: function(res) {
          var userInfo = res.userInfo;
          
          var nickName = userInfo.nickName;
          var avatarUrl = userInfo.avatarUrl;
          var input_value = this.data.input_value;

          console.log(nickName);
          console.log(avatarUrl);
          console.log(input_value);
        }
      });
    }, function() {
      wx.switchTab({
        url: '../me/me'
      })
    });
  }

})