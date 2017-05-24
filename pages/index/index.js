/* index.js */

//获取应用实例
var app = getApp()
Page({
  data: {
    
  },

  //事件处理函数
  scanTap: function() {
    wx.scanCode({
      success: function() {
        onlyFromCamera: true
      }
    })
  },

  onLoad: function () {
    var that = this

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
      })
    })
  }
})
