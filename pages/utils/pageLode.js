/* pageLode.js
 *
 * 页面加载组件
 */

var boo = 1; // 初始页面

function pageLode(callback, error, complete) {
  this.setData({
      load_condition: true
    });

    this.setData({
      load_condition: false
    });

    // 请求推荐列表
    wx.request({
      url: 'https://85293008.qcloud.la/wxapp/soft/RecommendBooks.action',
      data: {
        token: getToken.getToken(),
        page: page,
        pageSize: 5
      },
      success: function (res) {
        console.log(res.data);
        var book = that.data.book;

        book.push(res.data); // 将下一页数据加到队列中

        // 重新渲染
        that.setData({
          book: book
        });

        page++;
      }
    });
}

module.exports.pageLode = pageLode;