function Person(name){

  this.name = name;

}
Person.prototype = {
  id : "once id",
  getName : function(){
    console.log(this.name);
  }
};



var p1 = new Person('tom',3);
var p2 = new Person('lang',6);
console.log(p1 instanceof Person);
p1.getName();

for (var variable in p1) {
  console.log(variable);
}

p1.id = "two id!";

console.log(p2.id);
console.log(p1.id == p2.id);
