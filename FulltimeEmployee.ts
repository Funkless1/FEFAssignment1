import { IEmployee } from "./IEmployee.js";
import { Employee } from "./Employee.js";

export class FulltimeEmployee extends Employee implements IEmployee {
    private salary: number;
    private bonus: number;
    private overtimeHours: number;

    constructor(ssn: string, lastName: string, firstName: string,
                address: string, rank: number, age: number,
                salary: number, bonus: number, overtimeHours: number) {
        super(ssn, lastName, firstName, address, rank, age)
        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHours;
    }

    displayInformation(): string {
        return `Employee: ${this.firstName} ${this.lastName} Age: ${this.age} Rank: ${this.rank} Address: ${this.address} SSN: ${this.ssn}`
    }

    calculateCompensation(amount: number): void {
        
    }

    saveEmployee(): void {
        
    }
}