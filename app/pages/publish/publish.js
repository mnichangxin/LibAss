// publish.js
var isLogin = require('../utils/isLogin.js')
var getToken = require('../utils/getToken.js')

var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

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
    var that = this;

    isLogin.isLogin(function() {
      wx.getUserInfo({
        success: function(res) {
          var userInfo = res.userInfo;
          
          var avatarUrl = userInfo.avatarUrl; 
          var input_value = that.data.input_value;    

          wx.request({
            url: 'https://85293008.qcloud.la/wxapp/soft/circle_publish.action',
            data: {
              token: getToken.getToken(),
              body: input_value,
              imgSrc: avatarUrl
            },
            success: function(res) {
              showTip(res.data.message);
              
              if (res.data.data) {
                wx.navigateTo({
                  url: '../relationship/relationship'
                }); 
              }
            }
          });
        }
      });
    }, function() {
      wx.switchTab({
        url: '../me/me'
      })
    });
  }

})