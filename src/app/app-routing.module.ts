import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleKekeComponent } from './components/single-keke/single-keke.component';
import { AuthComponent } from './core/auth/auth/auth.component';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'member/:id', component: SingleKekeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuardGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
