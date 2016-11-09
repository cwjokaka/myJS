function person(na){
    return new person.prototype.init(na);
}

person.prototype={
    init:function(na){
       this.name=na;
       return this;
    },
    outName:function(){
       alert(this.name);
    }
}

person.prototype.init.prototype = person.prototype;

var p1 = person('tom');
console.log(p1 instanceof person);
console.log(p1.constructor);
p1.outName();
