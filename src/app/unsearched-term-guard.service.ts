import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsearchedTermGuardService {

  constructor() { }

  canDeactivate(
    component: SearchComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("UnsearchedTermGuard");
    console.log(state.url);
    return component.canDeactivate() || window.confirm("Are you sure?");
  }
}
