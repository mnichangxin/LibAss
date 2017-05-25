/* 获取当前日期的前后日期 */
function getDateStr(add_count) {
  var date = new Date();
  
  date.setDate(date.getDate() + add_count); // 获取add_count天后的日期 
  
  var y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate();
  
  if (m >= 1 && m <= 9) {
    m = '0' + m;
  }
  if (d >= 0 && d <= 9) {
    d = '0' + d;
  }

  return y + "-" + m + "-" + d;
} 

module.exports.getDateStr = getDateStr;