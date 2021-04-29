import { LazyModule } from './lazy/lazy.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { Resolver } from './resolver';

const routes: Routes = [
  {
    path: "backup",
    component: HelloComponent
  },
  {
    path: "",
    loadChildren: () =>
      import("./lazy/lazy.component").then(m => {
        console.log("Lazy module bundle loaded", m);
        return LazyModule;
      }),
    resolve: { value: Resolver }
  },
  {
    path: "**",
    component: HelloComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
