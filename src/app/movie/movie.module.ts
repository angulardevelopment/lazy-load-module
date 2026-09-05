import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';


@NgModule({
    imports: [
        CommonModule,
        MovieRoutingModule,
        MovieComponent
    ]
})
export class MovieModule { 
  constructor() {
    console.log('MovieModule loaded');
  }
}
