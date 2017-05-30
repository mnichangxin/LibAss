/* login.js */
var login = require('../utils/login.js');

var appInstance = getApp(); // 获取App实例

var login_data = {
  username: '',
  password: ''
},
reg_data = {
  username: '',
  password: '',
  confirm: ''
};

var showTip = function(title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

Page({
  // 页面的初始数据
  data: {
    condition: true,
    bind_phone: false
  },

  // 事件处理函数
  onLoad: function() {
      
  },

  // 渲染哪个模板
  toReg: function() {
    this.setData({
      condition: false
    });
  },
  toLogin: function() {
    this.setData({
      condition: true,
      bind_phone: false
    });
  },

  // 表单相关事件
  loginUsernameHandler: function(e) {
    login_data.username = e.detail.value;
  },
  loginPasswordHandler: function(e) {
    login_data.password = e.detail.value;
  },
  regUsernameHandler: function(e) {
    reg_data.username = e.detail.value;
  },
  regPasswordHandler: function(e) {
    reg_data.password = e.detail.value;
  },
  regConfirmHandler: function(e) {
    reg_data.confirm = e.detail.value;
  }, 

  // 登录注册验证
  loginSubmit: function() {
    var username = login_data.username,
        password = login_data.password;
    
    if (username == '' || password == '') {
      showTip('用户名或密码为空');
      return;
    }
    if (!/^1[3|4|5|7|8][0-9]{9}$/.test(username)) {
      showTip('手机号格式有误');
      return;
    }
    if (password.length < 6) {
      showTip('密码至少6位');
      return;
    }

    showTip('登录成功');
    
  },
  regSubmit: function() {
    var username = reg_data.username,
        password = reg_data.password,
         confirm = reg_data.confirm;
    
    if (username == '' || password == '' || confirm == '') {
      showTip('用户名或密码为空');
      return;
    }
    if (!/^1[3|4|5|7|8][0-9]{9}$/.test(username)) {
      showTip('手机号格式错误');
      return;
    }
    if (password.length < 6) {
      showTip('密码至少6位');
      return;
    }
    if (confirm != password) {
      showTip('两次密码不一致');
      return;
    }

    showTip('注册成功');

  },

  // 调取微信登录
  loginTap: function() {
    var that = this;

    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://85293008.qcloud.la/wxapp/soft/login_weChatCheck.action', // 请求登录的地址
          data: {
            code: res.code
          },
          success: function (res) {
            // token返回空说明未注册，跳转到注册页面；不为空直接登录
            if (res.data.token != null) {
                appInstance.globalData.redirect = true;

                wx.switchTab({
                  url: '../me/me',
                  success: function () {
                    console.log('跳转成功');
                  },
                  fail: function () {
                    console.log('跳转失败');
                  }
                });
            } else {
              that.setData({
                condition: false,
                bind_phone: true
              });
            }
          },
          fail: function () {
            console.log('登录失败');
          }
        });
        console.log('code:' + res.code);
      },
      fail: function () {
        console.log('调用登录接口失败');
      }
    });
  }
});