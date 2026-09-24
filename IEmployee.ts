export interface IEmployee {
    displayInformation(): string;
    calculateCompensation(amount:number): void;
    saveEmployee(): void;
}