import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service'
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';

// declare var $:any;
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, RouterLink, HeaderComponent,FormsModule]
})
export class HomeComponent {
serch: any;

trindingMovies:any[]=[];
trindingTv:any[]=[];
trindingPeople:any[]=[];
imgPrefix:string='https://www.themoviedb.org/t/p/w220_and_h330_face/';

constructor(private _MoviesService:MoviesService){};
  ngOnInit(): void {
    this._MoviesService.getTrinding('movie').subscribe((data) =>{
      this.trindingMovies=data.results.slice(0,10);
    });
    
    this._MoviesService.getTrinding('tv').subscribe((data) =>{
      this.trindingTv=data.results.slice(0,10);
    });

    this._MoviesService.getTrinding('person').subscribe((data) =>{
      this.trindingPeople=data.results.slice(0,10);
    }); 
    
    
  }

}