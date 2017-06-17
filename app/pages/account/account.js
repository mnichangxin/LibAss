/* account.js */

var appInstance = getApp();

Page({  
  // 页面初始数据
  data: {
    userInfo: {
      username: 'mnichangxin',
      phone: '18954109152',
      password: '123456'
    }
  },

  // 事件处理函数
  onLoad: function (options) {
    // this.setData({
    //   userInfo: {
    //     username: ,
    //     phone: ',
    //     password: 
    //   }
    // });
    console.log(appInstance.globalData.userInfo);
  }

});