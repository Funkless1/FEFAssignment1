export abstract class Employee {
    protected accountBalance: number;

    constructor(initialBalance: number) {
        this.accountBalance = initialBalance;
    }
}
