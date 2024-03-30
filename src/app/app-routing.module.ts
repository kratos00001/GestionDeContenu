import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/youtube/login/login.component';
import { AuthCallbackComponent } from './components/youtube/auth-callback/auth-callback.component';

const routes: Routes = [
  { path: 'youtube/login', component: LoginComponent },
  { path: 'youtube/auth-callback', component: AuthCallbackComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
