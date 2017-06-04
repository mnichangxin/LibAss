/* pageLoad.js
 *
 * 页面加载组件
 */

var getToken = require('../utils/getToken.js');

var page = 1; // 初始页码

function pageLoad(url, scope) {
    scope.setData({
      load_condition: true
    });

    // 一次一请求
    wx.request({
      url: url,
      data: {
        token: getToken.getToken(),
        page: page,
        pageSize: 1
      },
      success: function (res) {
        var book = scope.data.book;

        console.log(res.data);

        book.push(res.data); // 将下一页数据加到队列中

        // 重新渲染
        scope.setData({
          book: book
        });

        page++;

        console.log(page);
      }
    });
}

module.exports.pageLoad = pageLoad;