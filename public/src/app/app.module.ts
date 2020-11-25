import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactSearchViewComponent } from './views/contact-search-view/contact-search-view.component';

import { HttpClientModule } from '@angular/common/http';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactSearchViewComponent,
    RegistrationViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
