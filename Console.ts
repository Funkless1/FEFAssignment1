import { FulltimeEmployee } from "./FulltimeEmployee.js";
import { ContractEmployee } from "./ContractEmployee.js";


try {

    let workingFulltime = new FulltimeEmployee("555-555-555", "test", "test", "address", 2, 18, 1000, 10, 5);
    console.log(workingFulltime.displayInformation());
    console.log(workingFulltime.calculateCompensation());



    let workingContract = new ContractEmployee("555-555-555", "test", "test", "address", 2, 18, 40, 31);
    console.log(workingContract.displayInformation());
    console.log(workingContract.calculateCompensation());


}
catch (error){
    if (error instanceof Error) {
        console.log(error.message); //show the error message if it exists
    }
}