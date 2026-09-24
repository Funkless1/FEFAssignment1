import { FulltimeEmployee } from "./FulltimeEmployee.js";

let testFulltime = new FulltimeEmployee("ssn", "test", "test", "address", 2, 18, 1000, 10, 5);

try {
    console.log(testFulltime.displayInformation());
}
catch (error){
    if (error instanceof Error) {
        console.log(error.message) //show the error message if it exists
    }
}