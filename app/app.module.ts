import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';

import {HttpModule, JsonpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';


import { FavoritosListComponent} from './components/favoritos-list.component';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
   				routing
   				],
  declarations: [ AppComponent,
  				FavoritosListComponent
  				 ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }
