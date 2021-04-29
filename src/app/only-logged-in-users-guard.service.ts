import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuardService {

  constructor() { }
  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.isLoggedIn()) {
      return true;
    } else {
      window.alert("You don't have permission to view this page");
      return false;
    }
  }

// add this in service
    isLoggedIn(): boolean {
    return false; // Switch to `false` to make OnlyLoggedInUsersGuard work
  }

}
