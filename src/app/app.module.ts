import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPartComponent } from './form-part/form-part.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablePartComponent } from './table-part/table-part.component';
@NgModule({
  declarations: [
    AppComponent,
    FormPartComponent,
    TablePartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
