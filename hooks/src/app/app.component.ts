import { employees } from './employees';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hooks';
  employees?: Employee[];

  ngOnInit(): void {
   this.employees = employees;
  }

    /*functions*/
    selectEmployee(employee: Employee){
      alert(employee.name);

    }
}
