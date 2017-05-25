// reserve.js
var common = require('../utils/getDateStr.js');

Page({
  // 页面初始数据
  data: {
    date: '仅能预约当前三天',
    time: '仅能预约开馆时间',
    date_start: '',
    date_end: ''
  },

  // 事件处理函数
  onLoad: function () {    
    this.setData({
      date_start: common.getDateStr(0),
      date_end: common.getDateStr(2)
    });
  },
  dateChange: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  timeChange: function(e) {
    this.setData({
      time: e.detail.value
    });
  }

});