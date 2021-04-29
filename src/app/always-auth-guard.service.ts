import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuardService {

  constructor() { }
  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}
