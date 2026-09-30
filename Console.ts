import { FulltimeEmployee } from "./FulltimeEmployee.js";

try {

    
    let workingFulltime = new FulltimeEmployee("555-555-555", "test", "test", "address", 2, 18, 1000, 10, 5);
    console.log(workingFulltime.displayInformation());


    let ageErrorFulltime = new FulltimeEmployee("555-555-555", "test", "test", "address", 2, 12, 1000, 10, 5);      

}
catch (error){
    if (error instanceof Error) {
        console.log(error.message); //show the error message if it exists
    }
}