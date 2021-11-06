
import {  Routes } from '@angular/router'
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CreateTokenComponent } from './components/token/create-token/create-token.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: 'search', component: SearchComponent },
    { path: 'token/create', component:CreateTokenComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];