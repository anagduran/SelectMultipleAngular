import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
