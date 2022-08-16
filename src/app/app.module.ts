import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypingAnimationModule } from 'node_modules/angular-typing-animation'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TypingAnimationModule,
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /** add decorators */

 }
