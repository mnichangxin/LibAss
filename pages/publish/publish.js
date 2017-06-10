// publish.js

Page({
  // 页面初始数据
  data: {
    button_condition: true
  },

  // 事件处理函数
  onLoad: function (options) {
  
  },

  inputEvent: function(event) {
    var value = event.detail.value;

    if (value == '') {
      this.setData({
        button_condition: true
      });
    } else {
      this.setData({
        button_condition: false
      });
    }
  } 

})