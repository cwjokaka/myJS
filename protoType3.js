//工厂模式
function persons(na){
   function person(na){
      this.name=na;
   }
   person.prototype={
       outName:function(){
          alert(this.name);
       }
   }
   return new person(na);
}

var person1=persons("liuqiwen1");
person1.outName(); //输出liuqiwen1
var person2=persons("liuqiwen2");
person2.outName(); //输出liuqiwen2
