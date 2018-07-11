
// let lazyload = {};
var viewHeight = document.documentElement.clientHeight//获取可视区高度
// console.log('viewHeight', viewHeight);

// lazyload.install = function (Vue, options) {
//   Vue.directive('lazy', {
//     inserted: function (el, binding, vnode) {
//       let vm = vnode.context;
//       let reg = binding.arg;
//       lazyUtil();
//       window.onscroll = function () {
//         lazyUtil();
//       }
//     }
//   });
// }

function lazyUtil() {
  var eles = document.querySelectorAll('img[data-original]');
  Array.prototype.forEach.call(eles, function (item, index) {
    var rect;
    if (!item.dataset.original) return;
    rect = item.getBoundingClientRect();

    if (rect.bottom >= 0 && rect.top < viewHeight) {
      !function () {
        item.src = item.dataset.original;
        item.removeAttribute("data-original");
      }();
    };
  });

};

export default lazyUtil;