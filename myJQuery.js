//闭包匿名函数
(function(window,undefined){

  var
    readyList,
    rootjQuery,
    core_strundefined = typeof undefined,

    location = window.location,
    document = window.document,
    docElem = document.documentElement,

    //别名引用
    _jQuery = window.jQuery,
    _$ = window.$,

    //类型hash表
    class2type = {},
    //当前版本号
    core_version = "1.10.2",
    //数组
    core_deletedIds = [],

    //添加上述对象的方法引用(目的在于节省查找内存地址时间，提高效率)
    //数组方法
    core_concat = core_deletedIds.concat,
    core_push = Array.prototype.push,   //等价于core_deletedIds.push,下同
    core_slice = Array.prototype.slice,
    core_indexOf = Array.prototype.indexOf,
    //hashMap方法
    core_toString = class2type.toString,
    core_hasOwn = class2type.hasOwnProperty,
    //字符串方法
    core_version = core_version.trim,

    // 实例化 jQuery 对象 ,selector 是选择器，context 是上下文
    // 用法：$('#xxx') || $('<div></div>', { class: 'css-class', data-name: 'data-val' });
    jQuery = function(selector, context){
        return jQuery.prototype.init.prototype;
    }

  //暴露命名空间(jQuery&$)
  //window.jQuery = window.$ = jQuery;
})(window);
