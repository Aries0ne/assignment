import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'; // Angular Material table module
import { MatSortModule } from '@angular/material/sort'; // For sorting
import { MatInputModule } from '@angular/material/input'; // For input fields
import { MatSelectModule } from '@angular/material/select'; // For select dropdown
import { MatButtonModule } from '@angular/material/button'; // For buttons
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSortModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
