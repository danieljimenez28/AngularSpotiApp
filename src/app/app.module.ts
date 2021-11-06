import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// RUTAS
import { ROUTES } from './../app/app.routes';
//PIPES
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


import { TarjetaComponent } from './components/shared/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ErrorMessageComponent } from './components/shared/error-message/error-message.component';
import { CreateTokenComponent } from './components/token/create-token/create-token.component'

import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/shared/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetaComponent,
    LoadingComponent,
    ErrorMessageComponent,
    CreateTokenComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES, {useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
