import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactSearchViewComponent } from './views/contact-search-view/contact-search-view.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { MyContactsViewComponent } from './views/my-contacts-view/my-contacts-view.component';

import { RequestInterceptorService } from './request-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactSearchViewComponent,
    RegistrationViewComponent,
    LoginViewComponent,
    ProfileViewComponent,
    MyContactsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
