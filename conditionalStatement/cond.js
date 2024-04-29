function checkInput(){
    let age = document.getElementById("myInput").value;
    //terminator operator
    age = age == ''? 0 :age;
    console.log("Age is "+age);
    if(age >= 18){
        console.log("older than 18");
    }else{
        console.log("younger than 18");
    }
}
function checkDistrict(){
    let district = document.getElementById("mySelect").value;

    switch(district){
        case "Colombo":
            console.log("You are in Colombo");
            break;
        case "Gampaha":
            console.log("You are in Gampaha");
            break;
        case "Kandy":
            console.log("You are in Kandy");
            break;
        case "Kegalle":
            console.log("You are in Kegalle");
            break;
        default :
            console.log("Other district");
    }
}