import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TablesComponent } from './tables/tables.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { EditComponent } from './edit/edit.component';







@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    EditModalComponent,
    DeleteModalComponent,
    AlertComponent,
    EditComponent,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    NgbModule,
    ReactiveFormsModule
    

    
    
  
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
