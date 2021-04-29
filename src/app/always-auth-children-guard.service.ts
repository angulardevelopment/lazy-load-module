import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthChildrenGuardService {

  constructor() { }
  canActivateChild() {
    console.log("AlwaysAuthChildrenGuard");
    return true;
  }
}
