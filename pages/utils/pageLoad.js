/* pageLoad.js
 *
 * 分页加载组件
 */

var getToken = require('../utils/getToken.js');

var page = 1; // 初始页码

function pageLoad(url, scope, object, isPage) {
    if (isPage) {
      page = 1;
    }
    
    scope.setData({
      load_condition: true
    });

    // 一次一请求
    wx.request({
      url: url,
      data: Object.assign({
        token: getToken.getToken(),
        page: page,
        pageSize: 1
      }, object),
      success: function (res) {
        var book = scope.data.book;

        if (res.data) {
          book = book.concat(res.data); // 将下一页数据加到队列中

          // 重新渲染
          scope.setData({
            book: book
          });

          console.log(page);

          page++;
        }
      }
    });
}

module.exports.pageLoad = pageLoad;