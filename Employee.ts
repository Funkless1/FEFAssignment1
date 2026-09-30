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

    public validateAge(): boolean {
        return (this.age >= 16);
    }

    public validateRank(): boolean {
        return (this.rank > 0 || this.rank < 6);
    }

    public validateSSN(): boolean {
        const pattern = /^\d{3}-\d{3}-\d{3}$/; //this line looked up

        return (pattern.test(this.ssn));
    }
}
