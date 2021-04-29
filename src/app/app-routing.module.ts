import { LazyModule } from './lazy/lazy.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

import { Resolver } from './resolver';

import { TracklistComponent } from "./tracklist/tracklist.component";
import { ArtistalbumComponent } from "./artistalbum/artistalbum.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { ArtistComponent } from "./artist/artist.component";

import { UnsearchedTermGuardService } from "./unsearched-term-guard.service";
import { OnlyLoggedInUsersGuardService } from "./only-logged-in-users-guard.service";
import { AlwaysAuthGuardService } from "./always-auth-guard.service";
import { AlwaysAuthChildrenGuardService } from "./always-auth-children-guard.service";

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
  { path: "hi", redirectTo: "home" },
  { path: "find", redirectTo: "search" },
  { path: "home", component: HomeComponent },
  {
    path: "search",
    component: SearchComponent,
    canDeactivate: [UnsearchedTermGuardService]
  },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    canActivate: [OnlyLoggedInUsersGuardService, AlwaysAuthGuardService],
    canActivateChild: [AlwaysAuthChildrenGuardService],
    children: [
      { path: "", redirectTo: "tracks", pathMatch: 'full' },
      { path: "tracks", component: TracklistComponent },
      { path: "albums", component: ArtistalbumComponent }
    ]
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
