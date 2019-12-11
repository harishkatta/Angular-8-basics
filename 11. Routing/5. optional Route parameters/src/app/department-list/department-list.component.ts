import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list
    </p>
    <ul class="items">
      <li [class.selected]="isSelected(department)" (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge"> {{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  private selectedId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });

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
  isSelected(department) {
    return department.id === this.selectedId;
  }

}
