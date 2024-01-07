import { Routes } from '@angular/router';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { authGuardGuard } from './auth-guard.guard';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

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
