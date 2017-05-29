/* 获取登录用户信息 */
function getUserInfo() {
  // 调用微信用户接口
  wx.getUserInfo({
    success: function(res) {
      var userInfo = res.userInfo;
      
      return {
        nickName: userInfo.nickName, // 用户名
        avatarUrl: userInfo.avatarUrl, // 头像
        gender: userInfo.gender, // 性别
        province: userInfo.city, // 省份,
        city: userInfo.city, // 国家
        country: userInfo.country // 国家
      }
    }
  });
}

module.exports.getUserInfo = getUserInfo;