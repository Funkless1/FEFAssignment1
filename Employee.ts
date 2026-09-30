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
        this.validateSSN();
        
    }

    public validateAge(): boolean {
        if (this.age >= 16)
            return true;
        else
            throw new Error("Employee must be atleast 16.");
    }

    public validateRank(): boolean {
        if (this.rank > 0 || this.rank < 6)
            return true;
        else
            throw new Error("Employee rank must be between 1-5");
    }

    public validateSSN(): boolean {
        const pattern = /^\d{3}-\d{3}-\d{3}$/; //this line looked up

        if (pattern.test(this.ssn))
            return true;
        else
            throw new Error("SSN must follow patterns: ###-###-###")
    }
}
