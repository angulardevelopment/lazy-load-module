import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';



@NgModule({
    exports: [LazyComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: LazyComponent }]),
        LazyComponent
    ]
})
export class LazyModule { 
  constructor() {
    console.log('LazyModule loaded');
  }
}
