import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibalityComponent } from './libality.component';
import { EditLibalityComponent } from './edit-libality/edit-libality.component';
import { AddLibalityComponent } from './add-libality/add-libality.component';
import { ListLibalityComponent } from './list-libality/list-libality.component';



@NgModule({
  declarations: [LibalityComponent, EditLibalityComponent, AddLibalityComponent, ListLibalityComponent],
  imports: [
    CommonModule
  ]
})
export class LibalityModule { }
