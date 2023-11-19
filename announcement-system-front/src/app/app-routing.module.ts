import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { HomeComponent } from './home/home.component';
import { ViewAnnouncementComponent } from './view-announcement/view-announcement.component';

const routes: Routes = [
  // { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: '', component: HomeComponent , title:'home'},
  { path: 'edit', component: EditAnnouncementComponent , title:'welcome'},
  { path: 'view', component: ViewAnnouncementComponent, title:'about-us'},
  // // { path: 'AddEmployee', component: AddAnnouncementComponent },
  // { path: 'EditEmployee/:employeeId', component: EditAnnouncementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
