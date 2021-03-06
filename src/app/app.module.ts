import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService, ToastrService],
  imports: [BrowserModule],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }
