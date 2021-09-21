import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApartmentComponent } from './apartment/apartment.component';

import { AppComponent } from './app.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    ApartmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
