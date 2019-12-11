import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      selected department {{departmentId }}
    </p>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  departmentId: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }
}
