import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HomeComponent } from './home.component';
import { BalancesheetComponent } from './balancesheet/balancesheet.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    HomeComponent,
    BalancesheetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forChild([
      { path: '', component: BalancesheetComponent }
    ])
  ],
  providers: [
  ]
})
export class HomeModule { }
