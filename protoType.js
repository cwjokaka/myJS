function People(name,age){
    this.name=name;
    this.age=age;
    //成员方法
    this.run = function(){
      console.log("I can run");
    }
}
//类静态方法
People.say = function(){
    console.log("I can say");
};
//原型方法
People.prototype.hit = function(){
    console.log("I can hit");
};

// People.prototype={
//     id:'I am a People'
// };
var a = new People('A',18);
a.run();
People.say();
a.hit();
