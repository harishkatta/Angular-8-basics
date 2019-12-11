import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDetailsGuard implements CanActivate {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let id = +next.url[1].path; // here + converts string into number

    if (isNaN(id) || id < 1) {
      alert('invaid deparment id');
      // navigationg to deparments route
      // this.router.navigate(['departments'])

      // using relative navigation
      this.router.navigate(['../'], { relativeTo: this.activatedRoute })
      return false;
    }
    return true;
  }
}
