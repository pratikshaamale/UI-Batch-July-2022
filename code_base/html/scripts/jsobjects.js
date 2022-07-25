
var myobj = {}


myobj.itsMe = function(){

    console.log("Hi");
}

myobj.author ='Lokesh'

var ourObj ={

    designer :'Using Js Objects',
    showDesigner:function(){
        console.log(this.designer)
        return this.designer
    }
}

var Employee = function(employeeId,employeeName){

    this.employeeId = employeeId;
    this.employeeName=employeeName;

}

var ram = new Employee(101,'ram')
function setContent(){

    var ele = document.getElementById("author");
     ele.innerHTML = myobj.author;

var title = document.getElementById("heading");
title.innerHTML = ourObj.designer;
    

}