function Student(id,name){
  this.id = id;
  this.name = name;
  this.getName = function(){
    console.log(this.name);
  }
}

function Teacher(id,name){
  this.id = id;
  this.name = name;
}
Teacher.prototype = {
  money : "2000",
  teach : function(){
    console.log("I am teaching");
  },
  hit : function(){
    console.log("I am hitting student");
  }
};
Teacher.prototype.say = function(){
  console.log("I am a Teacher");
};

window.onload = function(){
  var t1 = new Teacher(1,"chen");
  var t2 = new Teacher(1,"433");

  t2.money = "3214";
  console.log(t1.money);
  console.log(t1.money == t2.money);
  console.log(t1.id == t2.id);

}

var array = {
  "c2array":true,
  "size":[5,5,1],
  "data":[[[0],[0],[0],[0],[0]]
        ,[[0],[10],[0],[0],[0]]
        ,[[0],[0],[0],[12],[0]]
        ,[[0],[0],[0],[0],[0]]
        ,[[0],[0],[0],[0],[0]]]
};
