import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopPipe } from 'src/app/pipes/cop.pipe';



@NgModule({
  declarations: [
    CopPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CopPipe
  ]
})
export class SharedModule { }
