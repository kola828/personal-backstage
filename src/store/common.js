/*------公共方法------*/


exports.timeFormat = function (time) {
  time = parseInt(time);
  let day = new Date(time),
      Year = 0,
      Month = 0,
      Day = 0,
      CurrentDate = '';
  // 初始化时间
  Year = day.getFullYear();
  Month = day.getMonth() + 1;
  Day = day.getDate();
  CurrentDate += Year + '-';
  if (Month >= 10) {
    CurrentDate += Month + '-';
  } else {
    CurrentDate += '0' + Month + '-';
  }
  if (Day >= 10) {
    CurrentDate += Day;
  } else {
    CurrentDate += '0' + Day;
  }
  return CurrentDate;
};
