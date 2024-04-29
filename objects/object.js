let student = {
    name : "Bhanuka",
    age : 25 ,
    sayHello : function(){
        console.log("Hello...My name is "+ this.name);
    }
}
let student2 = {
    name : "Kavishka",
    address : "no 1,main street"

}
//access object
console.log(student);
student.sayHello();
console.log(student.name);

student.age = 24;
console.log(student.age);

//add method 
student.newFunction = function(){
    console.log("new function");
}
student.newFunction();

//add property
student.height = 176;
console.log(student.height);

//delete property
console.log(student);
delete student.height;
console.log(student);

//common object method

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

Object.assign(student2,student);
console.log(student2);

