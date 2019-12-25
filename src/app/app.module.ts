import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {ButtonModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

import {BooksComponent } from './books/books.component';
import {BookComponent} from './book/book.component';
import {ConfigurationsComponent } from './configurations/configurations.component';
import {TypesComponent } from './types/types.component';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    MenubarModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    AccordionModule,
    TableModule,
    RouterModule.forRoot([
      {path: 'books/new', component: BookComponent},
      {path: 'types/new', component: TypesComponent}
    ])
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent, 
    BookComponent, 
    BooksComponent, 
    ConfigurationsComponent, 
    TypesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
