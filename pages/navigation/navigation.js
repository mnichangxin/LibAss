// navigation.js
var token = require('../utils/getToken.js');

Page({
  // 页面初始数据
  data: {
    primary: [
      {
        title: '文学',
        second: [
          {
            title: '小说',
            third: [
              '情感', '穿越/重生', '历史', '惊悚/恐怖', '奇幻/玄幻', '官场', '社会', '军事', '外国小说', '中国当代小说'
            ]
          },
          {
            title: '文学',
            third: [
              '中国文学', '外国文学', '纪实文学', '各家作品', '文学评论研究'
            ]
          },
          {
            title: '青春文学',
            third: [
              '古代言情', '爱情/情感', '校园', '叛逆/成长'
            ]
          },
          {
            title: '传记',
            third: [
              '政治人物', '历代帝王', '领袖首脑', '军事任务', '财经任务'
            ]
          }
        ]
      },
      {
        title: '科技',
        second: [
          {
            title: '科普读物',
            third: [
              '数理化', '航天航空', '百科知识', '生物世界', '人类故事', '神秘世界', '科学史话'
            ]
          },
          {
            title: '自然科学',
            third: [
              '数学', '物理学', '化学', '力学', '地理学'
            ]
          }
        ]
      }
    ]
  },

  // 事件处理函数
  onLoad: function (options) {
    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/Linkage_list.action',
      data: {

      }
    })
  },

  focusTap: function() {
    wx.switchTab({
      url: '../index/index'
    })
  }

});