import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListingComponent } from './user-listing/user-listing.component';

import { DataService } from './data.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'app-user-registration',
    pathMatch: 'full'
  },
  {
    path: 'app-user-registration',
    component: UserRegistrationComponent
  },
  {
    path: 'app-user-listing',
    component: UserListingComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
