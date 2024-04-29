let globalScope = "This is global variable";

function test(){
    let localScope = "This is local variable" //functionscope
    let globalScope = "changed"; //functionscope
    console.log(globalScope);
    console.log(localScope);
}
test();
console.log(globalScope);
//console.log(localScope); can't access outside of test function

//code block (blockscope)
{
    let myName = "Bhanuka";
    console.log(myName);
}
//console.log(myName); can't access outside of test block