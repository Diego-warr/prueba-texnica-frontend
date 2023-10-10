import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VentasComponent } from './principal/ventas/ventas.component';
import { NotFoundComponent } from './principal/not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {CalendarModule} from "primeng/calendar";
import {CommonModule, DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {StyleClassModule} from "primeng/styleclass";
import {TableModule} from "primeng/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    PanelModule,
    CardModule,
    CalendarModule,
    CommonModule,
    InputTextModule,
    RippleModule,
    StyleClassModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    DatePipe,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
