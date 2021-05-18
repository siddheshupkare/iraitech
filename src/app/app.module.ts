import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaneladdComponent } from './paneladd/paneladd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from './series/series.component';



@NgModule({
  declarations: [
    AppComponent,
    PaneladdComponent,
    ChildComponent,
    HomeComponent,
    TaskComponent,
    FormComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
