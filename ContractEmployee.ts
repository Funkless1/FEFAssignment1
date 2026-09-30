import { IEmployee } from "./IEmployee.js";
import { Employee } from "./Employee.js";

export class ContractEmployee extends Employee implements IEmployee {
    private hours: number;
    private hourlyRate: number;

    constructor(ssn: string, lastName: string, firstName: string,
                address: string, rank: number, age: number,
                hours: number, hourlyRate: number) {
        super(ssn, lastName, firstName, address, rank, age)
        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }

    displayInformation(): string {
        return `Employee: ${this.firstName} ${this.lastName} Age: ${this.age} Rank: ${this.rank} Address: ${this.address} SSN: ${this.ssn}`
    }

    calculateCompensation(): number {
        if (this.hours <= 40)
            return this.hours * this.hourlyRate;
        else {
            let normalPay = 40 * this.hourlyRate;
            let overtime = this.hours - 40;
            let overtimePay = overtime * this.hourlyRate * 1.5;

            return normalPay + overtimePay;
        }
    }

    saveEmployee(): void {
        
    }
}