// function fn() {
//     for(var i=0 ; i<2; i++) {
//     //(function(){
//         var backup = i;
//         setTimeout(function() {
//             alert(backup);
//         }, 2000);
//     //})();
//     }
// }
//
// fn();


// (function(){
//   var str = "okaka";
// })();
var global = "15016157063";
(function(window){
  var local = window.jQuery;

  console.log(local);
  window.jQuery = window.$ = jQuery;
})(window);

// window.onload = function(){
//   fn();
//   console.log(str);
// }
