import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterLink, RouterModule } from '@angular/router';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule,RouterLink,CarouselModule,RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  id!:string;
  mediaType:string='movie';
  movieDetail:any={};
  movieRecommendations:any [] =[]; 
  movieVideo:any [] =[];
  imgPrefix:string='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  bgPrefix:string='https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';

  public isDragging: boolean = false;
  public timeoutId: any;

  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){
  }
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.fetchMovieDetails();
      window.scrollTo(0, 0);
    }); 
  } 

  fetchMovieDetails(): void {
    forkJoin([
      this._MoviesService.getMediaDetails(this.mediaType, this.id),
      this._MoviesService.getMediaRecomandation(this.mediaType, this.id),
      this._MoviesService.getMediaVideo(this.mediaType, this.id),
    ]).subscribe(([movie, recom, video]: [any, any, any]) => {
      this.movieDetail = movie;
      this.movieRecommendations = recom.results;
      this.movieVideo = video.results; 
    }); 
  } ;
  customOptions: OwlOptions = {
    loop: true,
    margin:8,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items:6
      },
      940: {
        items: 8
       
      } 
    }, 
    nav: true
    
  }
  
  toString(num: number): string {
    return String(num);
}
on_carouselDrag(dragging: boolean){
  setTimeout(() => {
    this.isDragging = dragging;
  }, 10 )
}
 
}
 