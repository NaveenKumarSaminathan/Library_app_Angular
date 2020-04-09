import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component';
import {ViewallComponent} from './viewall/viewall.component';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './edit/edit.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent },
  { path: 'viewall', component: ViewallComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
