/* getToken.js */
function getToken() {
  try {
    var value = wx.getStorageSync('token')
    
    if (value) {
      return value;
    } else {
      return '';
    }
  } catch (e) {
    return '';
  }
}

module.exports.getToken = getToken;