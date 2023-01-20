import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ManagersComponent } from './components/managers/managers.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './core/auth/auth/auth.component';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardGuard] },
  { path: 'members', component: ManagersComponent, canActivate: [AuthGuardGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
