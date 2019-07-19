import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'speakers', component: EventsComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
