"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;

/**
 * @description 事件停止被触发N秒后才会再次触发回调，防抖动函数
 * @summary 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
 * @param {Function} func - 回调执行函数
 * @param {String} wait - 触发间隔
 * @param {Boolean} immediate - 是否延时执行
 * @return {Function} 新的防抖函数。
 * @example
 * var myEfficientFn = debounce(function () {
 * // todo
 * }, 250);
 * window.addEventListener('resize', myEfficientFn);
 */
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}