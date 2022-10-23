import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundPipe } from './pipes/round-num.pipe';



@NgModule({
  declarations: [
    RoundPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoundPipe
  ]
})
export class SharedModule { }
