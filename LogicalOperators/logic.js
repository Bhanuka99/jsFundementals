function compare(){
    let val1 =document.getElementById("input1").value;
    let val2 =document.getElementById("input2").value;
    //convert string to number
    val1 = Number(val1);
    val2 = Number(val2);
    //also can use parseInt() or parseFloat() methods
    console.log("inputs : ",val1,val2);
    let output = '';
    //equal values
    if(val1 == val2){
        output = "input 1 == input 2 <br>"
    }
    //equal values and types
    if(val1 === val2){
        output += "input 1 === input 2 <br>"
    }
    //not equal value
    if(val1 != val2){
        output += "input 1 != input 2 <br>"
    }
    //not equal value and type
    if(val1 !== val2){
        output += "input 1 !== input 2 <br>"
    }
    //compare values
    if(val1 > val2){
        output += "input 1 > input 2 <br>"
    }
    if(val1 < val2){
        output += "input 1 < input 2 <br>"
    }
    if(val1 >= val2){
        output += "input 1 >= input 2 <br>"
    }
    if(val1 <= val2){
        output += "input 1 <= input 2 <br>"
    }
    output += ".............. <br>"
    //logical operations
    //and
    if(val1 > 10 && val2 > 10 && val1 > val2){
        output += "input 1 >10 and input 2 >10 and input 1 > input2 <br>"
    }
    //or
    if(val1 > 10 || val2 > 10){
        output += "input 1 >10 or input 2 >10 <br>"
    }
    //not
    if(!(val1 > 10)){
        output += "input 1  not >10 <br>"
    }

    document.getElementById("result").innerHTML = output;
}