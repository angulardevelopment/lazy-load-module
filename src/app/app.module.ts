import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TracklistComponent } from "./tracklist/tracklist.component";
import { ArtistalbumComponent } from "./artistalbum/artistalbum.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { ArtistComponent } from "./artist/artist.component";
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ArtistComponent, ArtistalbumComponent,HeaderComponent , HomeComponent, SearchComponent, TracklistComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
