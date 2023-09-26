export interface Employee{
    id: number;
    level: number;
    seniority: number;
    name: string;
    picture: string;
    roles: Array<string>;
    birthDate: Date;
}