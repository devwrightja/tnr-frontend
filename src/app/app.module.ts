import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2/index';
import { firebaseConfig } from '../environments/firebase.config'

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SubheaderComponent } from './landing-page/subheader/subheader.component';
import { PromotionComponent } from './landing-page/promotion/promotion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientsComponent } from './landing-page/clients/clients.component';
import { TryComponent } from './landing-page/try/try.component';
import { TopSpendersComponent } from './landing-page/top-spenders/top-spenders.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SubheaderComponent,
    PromotionComponent,
    NavbarComponent,
    ClientsComponent,
    TryComponent,
    TopSpendersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
