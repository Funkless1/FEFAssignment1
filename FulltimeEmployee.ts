import { IEmployee } from "./ContractEmployee.js";
import { Employee } from "./Employee.js";

export class FulltimeEmployee extends Employee implements IEmployee {
    private salary: number = 0;
    private bonus: number = 0;
    private overtimeHours = 0;

    constructor(ssn: string, lastName: string, firstName: string, address: string, rank: number, age: number) {
        super(ssn, lastName, firstName, address, rank, age)
    }

    displayInformation(): string {
        
    }

    calculateCompensation(amount: number): void {
        
    }

    saveEmployee(): void {
        
    }
}