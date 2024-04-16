import { Routes } from '@angular/router';
import { authGuardGuard } from './Guard/auth-guard.guard';
import { GallaryComponent } from './Components/gallary/gallary.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PersonDetailsComponent } from './Components/person-details/person-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { TvDetailsComponent } from './Components/tv-details/tv-details.component';
import { TvComponent } from './Components/tv/tv.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'home', component: HomeComponent ,canActivate: [authGuardGuard]},
    { path: 'gallary/:id', component: GallaryComponent ,canActivate: [authGuardGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'movieDetail/:id', component: MovieDetailsComponent ,canActivate: [authGuardGuard]},
    { path: 'tvDetail/:id', component: TvDetailsComponent ,canActivate: [authGuardGuard]},
    { path: 'personDetail/:id', component: PersonDetailsComponent ,canActivate: [authGuardGuard]},
    { path: 'tvDetail', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'movieDetail', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'personDetail', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'gallary', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'tv', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'movies', pathMatch: 'full', redirectTo: 'home' },    
    { path: 'movies/:id', component: MoviesComponent ,canActivate: [authGuardGuard]},
    { path: 'tv/:id', component: TvComponent ,canActivate: [authGuardGuard]},

    { path: '**', component: PageNotFoundComponent ,canActivate: [authGuardGuard]},

];
