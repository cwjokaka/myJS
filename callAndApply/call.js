function A()
{
 this.d=5;
 this.c=5;  
}
A.prototype.name="father";

var a= new A();//构造函数会给创建的实例添加所有属性和方法包括自有属性和prototype的属性
var b={};
A.call(b);//apply和call方法只会返回对象的自有属性，prototype属性都会丢弃
/*如下四种实例可证*/
console.log(a.d);
console.log(b.d);
console.log(a.name);
console.log(b.name);
