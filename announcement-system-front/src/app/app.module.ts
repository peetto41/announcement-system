import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
// import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
// import { ViewAnnouncementComponent } from './view-announcement/view-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AddAnnouncementComponent,
    EditAnnouncementComponent,
    // ViewAnnouncementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent]
})
export class AppModule { }
