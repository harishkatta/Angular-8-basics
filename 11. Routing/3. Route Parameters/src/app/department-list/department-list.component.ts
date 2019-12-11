import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list
    </p>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge"> {{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]
  onSelect(department) {
    this.router.navigate(['departments', department.id])
  }

}
