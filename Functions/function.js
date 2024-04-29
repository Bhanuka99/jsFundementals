function displayName(firstName,lastName){

    console.log(firstName + " " + lastName);

    }

displayName("Priyantha","Ariyarathne");
displayName("Bhaddra","Waligalle");
displayName("Thisali","Ariyarathne");
displayName("Bhanuka","Ariyarathne");

//return value

function getInfo(fullName,age){
    let output = fullName+ " is " +age+ " years old";
    return output;
}
let data = getInfo("Bhanuka",25);
console.log(data);
