function show(){
  console.log(typeof(x));       //undefined
  console.log(typeof('abcd'));  //string
  console.log(typeof(10));      //number
  console.log(typeof(true));    //boolean

  console.log(typeof(function(){}));  //function

  console.log(typeof( {id:10,name:'long'} )); //object
  console.log(typeof( new Number(10) ));      //object
  console.log(typeof( ['a',10,true] ));       //object
  console.log(typeof( null ));                //object

  console.log("------------------------------");

  console.log(null instanceof Object);          //false
  console.log(['a',10,true] instanceof Object); //true
  console.log('abck' instanceof Object);        //false

}
show();

/*
  总结:
  typeof判断值的类型
*/
