import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      selected department {{departmentId }}
    </p>
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    <p><button (click)="goToDepartments()">Back</button></p>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  departmentId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
  }
  goPrevious() {
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', { id: selectedId, test: 'testValue' }]);
  }
}
