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

        this.validateAge();
        this.validateRank();
        
    }

    public validateAge(): boolean {
        return this.age >= 16;
    }

    public validateRank(): boolean {
        return this.rank > 0 || this.rank < 6;
    }

    public validateSSN(): boolean {
        return true;
    }
}
