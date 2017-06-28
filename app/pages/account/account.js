/* account.js */
var getToken = require('../utils/getToken.js');

var appInstance = getApp();

var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

// var validate = function(value) {
//   if (value == '') {
//     showTip('手机号或密码不能为空！')
//   }
//   if (value ) {

//   }
// }

Page({  
  // 页面初始数据
  data: {
    userInfo: {
      username: 'mnichangxin',
      phone: '18954109152'
    },
    input_state: {
      input_phone: true,
      input_pwd: true
    },
    submit_state: true,
    new_password: false,
    phone: '',
    password: '',
    npassword: ''
  },

  // 事件处理函数
  onLoad: function (options) {
    // wx.getUserInfo({
    //   success: function(res) {
    //     this.setData({
    //       username: res.userInfo.nickName,
    //       phone: appInstance.gloabData.phone,
    //       // password: ''
    //     });
    //   } 
    // })

    // this.setData({
    //   userInfo: {
    //     username: ,
    //     phone: ',
    //     password: 
    //   }
    // });
    this.setData({
      phone: '18954109152'
    })
  },

  // 修改手机号或密码
  handleChangePhone() {
    this.setData({
      input_state: {
        input_phone: false,
        input_pwd: false
      },
      submit_state: false,
      new_password: false
    });
  },
  handleChangePwd() {
    this.setData({
      input_state: {
        input_phone: true,
        input_pwd: false
      },
      submit_state: false,
      new_password: true
    });
  },
  phoneChange(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  pwdChange(e) {
    this.setData({
      password: e.detail.value
    });
  },
  npwdChange(e) {
    this.setData({
      npassword: e.detail.value
    });
  },
  handleSubmit() {
    var that = this;
    // console.log(this.data.phone);
    if (this.data.phone == '' || this.data.password == '') {
      showTip('手机号或密码为空');
      return;
    }
    if (!/^1[3|4|5|7|8][0-9]{9}$/.test(this.data.phone)) {
      showTip('手机号格式错误');
      return;
    }
    if (this.data.password.length < 6) {
      showTip('密码至少6位');
      return;
    }
    
    if (!this.data.new_password) {
      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/user_update.action',
        data: {
          token: getToken.getToken(),
          phone: that.data.phone,
          oldPassword: that.data.password
        },
        success: function(res) {
          if (res.data.data) {
            showTip(res.data.message);
          } else {
            showTip(res.data.message);
          }
        },
        fail: function() {
          showTip('修改失败');
        }
      });
    } else {
      if (this.data.password != this.data.npassword) {
        showTip('新旧密码不一致');
        return;
      }

      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/user_update.action',
        data: {
          token: getToken.getToken(),
          phone: that.data.phone,
          oldPassword: that.data.password,
          nPassword: that.data.npassword
        },
        success: function (res) {
          console.log(res.data);
        },
        fail: function() {
          showTip('修改失败');
        }
      });
    }
  }

});