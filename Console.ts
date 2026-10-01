import { FulltimeEmployee } from "./FulltimeEmployee.js";
import { ContractEmployee } from "./ContractEmployee.js";

//Fulltime Employee
let correctFulltime = new FulltimeEmployee("123-456-789", "Of Rivia", "Geralt", "Rivia perhaps idk", 3, 60, 100000, 1, 5);

try {
    correctFulltime.saveEmployee();
    console.log(correctFulltime.displayInformation());
    console.log(`Pay: $${correctFulltime.calculateCompensation()}`);
}
catch (error){
    if (error instanceof Error) {
        console.log(error.message); //show the error message if it exists
    }
}

//Contract Employee
let correctContract = new ContractEmployee("987-654-321", "Guy", "Normal", "100 Lame Street", 1, 26, 40, 31);

try {
    console.log("");

    correctContract.saveEmployee();
    console.log(correctContract.displayInformation());
    console.log(`Pay: $${correctContract.calculateCompensation()}`);
}
catch (error){
    if (error instanceof Error) {
        console.log(error.message); //show the error message if it exists
    }
}


//age error throws
//let wrongContract = new ContractEmployee("0", "Baby", "Newborn", "Hospital", 0, 1, 40, 31);

//ssn error throws
//let wrongContract = new ContractEmployee("0", "Baby", "Newborn", "Hospital", 0, 20, 40, 31);

//rank error throws
let wrongContract = new ContractEmployee("555-555-555", "Baby", "Newborn", "Hospital", 9, 20, 40, 31);

try {
    console.log("");

    wrongContract.saveEmployee();
    console.log(wrongContract.displayInformation());
    console.log(wrongContract.calculateCompensation());
}
catch (error){
    if (error instanceof Error) {
        console.log(error.message); //show the error message if it exists
    }
}