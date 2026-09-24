export abstract class Employee {
    protected ssn: string;
    protected lastName: string;
    protected firstName: string;
    protected address: string;
    protected rank: number;
    protected age: number;

    constructor(ssn: string, lastName: string, firstName: string, address: string, rank: number, age: number) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }
}
