export interface IEmployee {
    displayInformation(): string;
    calculateCompensation(): number; //deleted parameter
    saveEmployee(): void;
}