import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class Resolver implements Resolve<string> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> | Observable<never> {
    console.log("resolver called");
    return of("resolved").pipe(
      delay(500),
      map(() => {
        console.log("resolver completed");
        return "mapped resolve";
      })
    );
  }
}
