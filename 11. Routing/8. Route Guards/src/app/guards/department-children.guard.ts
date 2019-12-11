import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentChildrenGuard implements CanActivateChild {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('DepartmentChildrenGuard', next);
    console.log(state);
    if (state.url === '/departments/1/overview') {
      return true;
    }
    alert('no access for this child');
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
    return false;
  }
}
