import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EntryComponent } from './entry/entry.component';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';


const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register/:role',
    component: RegisterComponent,
  },
  {
    path: 'events-list',
    component: EventsListComponent,
  },
  {
    path: 'create-event',
    component: CreateEventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
