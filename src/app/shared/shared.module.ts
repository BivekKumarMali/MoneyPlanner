import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FilterComponent } from './filter/filter.component';
import { AuthService } from '../core/auth/auth.service';
import { AuthGuard } from '../core/auth/auth.guard';

@NgModule({
  declarations: [NavComponent, FilterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
  ],
  exports: [NavComponent, FilterComponent],
  providers: [AuthService, AuthGuard],
})
export class SharedModule {}
