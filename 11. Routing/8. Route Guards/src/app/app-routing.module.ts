import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsGuard } from './guards/department-details.guard';
import { DepartmentChildrenGuard } from './guards/department-children.guard';


//here these two components are duplicate with app.module.ts, so we can export from here it self
const routes: Routes = [

  // if we hit localhost:4200/ we will get wild card route defautly 
  // if we mentinon like this we will display any component as default, 
  // { path: '', component: DepartmentListComponent },

  // with redirectTo
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetailsComponent,
    canActivate: [DepartmentDetailsGuard],
    canActivateChild: [DepartmentChildrenGuard],
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
  DepartmentDetailsComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
]
