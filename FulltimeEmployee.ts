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
        return `FulltimeEmployee: ${this.firstName} ${this.lastName} | Age: ${this.age} | Rank: ${this.rank} | Address: ${this.address} | SSN: ${this.ssn}`
    }

    calculateCompensation(): number {
        let overtimeComp: number;

        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            overtimeComp = (this.salary / 40) * this.overtimeHours * 1.25;
        }
        else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            overtimeComp = (this.salary / 40) * this.overtimeHours * 1.5;
        }
        else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            overtimeComp = (this.salary / 40) * this.overtimeHours * 1.75;
        }
        else if (this.overtimeHours >= 31 && this.overtimeHours <= 40) {
            overtimeComp = (this.salary / 40) * this.overtimeHours * 2;
        }
        else
            overtimeComp = 0;
        
        return this.salary + this.bonus + overtimeComp;
        
    }

    saveEmployee(): void {
        if (!this.validateAge())
            throw new Error("Employee must be atleast 16.");
        if (!this.validateRank())
            throw new Error("Employee rank must be between 1-5");
        if (!this.validateSSN())
            throw new Error("SSN must follow patterns: ###-###-###");
    }
}