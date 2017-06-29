// relationship.js
var getToken = require('../utils/getToken.js');
var isLogin = require('../utils/isLogin.js');

// 模态弹框
var showTip = function (title) {
  wx.showToast({
    title: title,
    icon: 'success',
    image: '../static/icon/error.png',
    duration: 2000
  });
};

// 页面数据渲染
Page({
  // 页面初始数据
  data: {
    activities: [],
    commentbox: {
      condition: false,
      disabled: true,
      line_condition: true
    },
    comment: '',
    comment_id: ''
  },

  // 事件处理函数
  onLoad: function (options) {
    var that = this;

    isLogin.isLogin(function() {
      wx.request({
        url: 'https://85293008.qcloud.la/wxapp/soft/circle_gets.action',
        data: {
          token: getToken.getToken()
        },
        success: function(res) {
          that.setData({
            activities: res.data
          });
        }
      });
    }, function() {
      wx.switchTab({
        url: '../me/me'
      });
    });

  },

  // 评论组件
  commentBtn: function(event) {
    this.setData({
      comment_id: event.currentTarget.dataset.id
    });
    this.data.commentbox.condition = true;
    this.setData({
      commentbox: this.data.commentbox
    });
  },
  commentInput: function(event) {
    var value = event.detail.value;

    this.setData({
      comment: value
    });

    if (value == '') {
      this.data.commentbox.disabled = true;
    } else {
      this.data.commentbox.disabled = false;
    }

    this.setData({
      commentbox: this.data.commentbox
    });
  },
  commentBlur: function(event) {
    console.log(event.detail)
    this.data.commentbox.condition = false;
    this.setData({
      commentbox: this.data.commentbox
    });
  },

  // 点赞和评论相关事件
  handleVoteup: function(event) {
    var that = this;

    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/circle_good.action',
      data: {
        token: getToken.getToken(),
        circleId: event.currentTarget.dataset.id
      },
      success: function(res) {
        if (res.data.data == true) {
          wx.request({
            url: 'https://85293008.qcloud.la/wxapp/soft/circle_gets.action',
            data: {
              token: getToken.getToken()
            },
            success: function (res) {
              that.setData({
                activities: res.data
              });
            }
          });
        } 
      }
    });        
  },
  handleComment: function(event) {
    var that = this;

    wx.getUserInfo({
      success: function(res) {
        var avatarUrl = res.userInfo.avatarUrl;
        wx.request({
          url: 'https://85293008.qcloud.la/wxapp/soft/circle_comment.action',
          data: {
            token: getToken.getToken(),
            body: that.data.comment,
            imgSrc: avatarUrl,
            circleId: that.data.comment_id
          },
          success: function (res) {
            this.data.commentbox.condition = false;
            this.setData({
              commentbox: this.data.commentbox
            });

            if (res.data.data == true) {
              wx.request({
                url: 'https://85293008.qcloud.la/wxapp/soft/circle_gets.action',
                data: {
                  token: getToken.getToken()
                },
                success: function (res) {
                  that.setData({
                    activities: res.data
                  });
                }
              });            
            }
          }
        });
      }
    });
  }
});