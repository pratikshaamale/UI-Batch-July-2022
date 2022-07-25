var a = 10;
function app(){
   var b = 2;

  return  function showB(){
     return b;
   }
}
console.log(b); //   ReferenceError: b is not defined
console.log("value of B"+app()());



