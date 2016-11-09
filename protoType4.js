function person(na){
  if(!(this instanceof person)){
    return new person(na);
  }else{
     this.name=na;
   }
}
person.prototype={
     outName:function(){
        alert(this.name);
     }
}

var p1 = window.person('tom');
p1.outName();
