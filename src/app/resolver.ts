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
// ResolveFn   loaded from the resolver.
export const routeResolverResolver: Resolve<boolean> = async (route) => {

  const todoId = route.paramMap.get('id');

  if (!todoId) {
    throw new Error('Todo ID is missing in the route!');
  }

  // Fetch the todo from the API
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch the todo');
  }

  return await response.json();
};
