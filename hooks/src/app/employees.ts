import { Employee } from "./employee.module";

export const employees: Employee[]=[
    { 
    "id": 1, 
    "level": 3, 
    "seniority": 8,
    "name": "Lila",
    "picture": "assets/images/emp1.jfif",
    "roles": [ "architect"],
    "birthDate": new Date("1984-05-16")
    }
    ,
    { "id": 2, 
    "level": 2,
     "seniority": 3,
    "name": "Micheal",
    "picture": "assets/images/emp2.jfif", 
    "roles": [ "lead dev"],
    "birthDate": new Date("1999-12-12")
    } 
    ,
    { "id": 3, 
    "level": 0, 
    "seniority": 1,
    "name": "Nina",
    "picture": "assets/images/emp3.jfif", 
    "roles": [ "lead dev"],
    "birthDate": new Date("2000-10-12")
    }];