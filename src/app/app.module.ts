import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevisComponent } from './components/devis/devis.component';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
