import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/components/home/home.component';
import { AuthComponent } from './UI/components/auth/auth.component';
import { StoresComponent } from './UI/components/stores/stores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-account', component: AuthComponent },
  { path: 'stores/:nameStore/login', component: StoresComponent },
  { path: '**', component: HomeComponent },
];

const routesHome: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
