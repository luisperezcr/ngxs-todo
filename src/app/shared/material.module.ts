import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
