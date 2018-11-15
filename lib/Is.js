/**
 * @module is
 */
/**
 * @desc 判断`obj`是否为空
 * @param {Object} obj object
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
    return false
  return !Object.keys(obj).length
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str - 邮箱地址
 * @return {Boolean}
 */
export function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
/**
 * @desc  判断是否为身份证号
 * @param  {String|Number} str - 身份证号
 * @return {Boolean}
 */
export function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
}
/**
 * @desc   判断是否为手机号
 * @param  {String|Number} str - 手机号的数值型或者字符串
 * @return {Boolean}
 */
export function isPhoneNum(str) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
}
/**
 * @desc   判断是否为URL地址
 * @param  {String} str - URL地址
 * @return {Boolean}
 */
export function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * 判断是纯对象（非数组，非函数）
 * @param {object} obj 需要判断的对象
 */
export const isObject = function (obj) {
  if (obj && typeof obj === 'object' && obj.toString === "[object Object]") {
    return true;
  } else {
    return false;
  }
}

/**
 * 检测是不是指数
 * @param {*} n - 需要判断的数值
 */
export function isPrime(n) {
  return !(/^.?$|^(..+?)\1+$/).test('1'.repeat(n));
}

/**
 * @desc 添加js的类型判断函数
 * @return {function}
 */
(function () {
  "use strict";
  const types = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(" ");
  function type() {
    return Object.prototype.toString.call(this).slice(8, -1);
  }
  for (let i = types.length; i--;) {
    keepsmiling["is" + types[i]] = (function (self) {
      return function (elem) {
        return type.call(elem) === self;
      };
    })(types[i]);
  }
})();//类型判断

/**
 * @desc   判断`obj`是否为空
 * @param  {Object} obj 需要判断的对象
 * @return {Boolean}
 */
export function isEmptyObject(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }
  return !Object.keys(obj).length;
}
/**
 * 判断是不是在node环境下执行代码
 * @summary Only Node.JS has a process variable that is of [[Class]] process
 * @return {Boolean}
 */
export const isBrowserEnv = () => Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';
/**
 * @function
 * @description 检测字符串是不是回文结构
 * @param {String} str - 需要检测的字符串
 * @return {Boolean} 返回的boolan值
 * @example
 * isPalindrome("level");
 * // returns true
 * isPalindrome("levels");
 * // returns false
 */
export function isPalindrome(str) {
  str = str.replace(/W/g, "").toLowerCase();
  return (str === str.split("").reverse().join(""));
}