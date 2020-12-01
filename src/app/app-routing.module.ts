import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AuthGuard } from './core/auth/auth.guard';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';
import { IncomeComponent } from './income/income.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: { preload: false },
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'income',
    component: IncomeComponent,
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import('./income/income.module').then((m) => m.IncomeModule),
  },
  {
    path: 'expense',
    component: ExpenseComponent,
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import('./expense/expense.module').then((m) => m.ExpenseModule),
  },
  {
    path: 'asset',
    component: AssetComponent,
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import('./asset/asset.module').then((m) => m.AssetModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
