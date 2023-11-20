import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: '', component: HomeComponent , title:'home'},
  { path: 'edit-data/:announcementId', component: EditAnnouncementComponent , title:'edit-data'},
  { path: 'add-data', component: AddAnnouncementComponent , title:'add-data'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
