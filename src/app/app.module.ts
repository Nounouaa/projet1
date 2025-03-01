import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './Controller/produits/produits.component';
import path from 'node:path';
import { HomeComponent } from './Controller/home/home.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path:"", Component:HomeComponent},
  {path:"produits", Component:ProduitsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
