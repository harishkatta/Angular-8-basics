import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees() {
    return [
      { id: 1, name: "Harish" },
      { id: 2, name: "Mahesh" },
      { id: 3, name: "Suresh" },
      { id: 4, name: "Naresh" }
    ];
  }
}
