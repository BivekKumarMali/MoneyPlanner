import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { IncomeComponent } from './income/income.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: '', component: UserComponent,
    data: { preload: false },
    loadChildren: () =>
      import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'income', component: IncomeComponent, canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import('./income/income.module').then(m => m.IncomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
