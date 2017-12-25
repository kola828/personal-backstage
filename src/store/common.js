/*------公共方法------*/

/**
 * @method setSession
 * @description 设置sessionStorage
 * @param name(string) sessionStorage名称
 * @param obj (obj) sessionStorage值
 */
exports.setSession = function (name, obj) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  if (typeof Storage !== "undefined") {
    localStorage[name] = obj;
  } else {
    document.cookie = name + "=" + obj + ";expires=" + exp.toGMTString();
  }
};
// sessionStorage.setItem(key,value)