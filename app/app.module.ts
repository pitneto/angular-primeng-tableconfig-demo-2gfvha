import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { StarWarsTableComponent } from './star-wars-table.component';
import { TableConfigService } from './table-config.service';
import { StarWarsService } from './star-wars.service';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    DialogModule
  ],
  declarations: [ AppComponent, StarWarsTableComponent ],
  providers:    [ TableConfigService, StarWarsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
