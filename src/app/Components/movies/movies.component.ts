import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../Services/movies.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxPaginationModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

  pageNumber!:string;
  movies:any[]=[]; 
  totalPages: number = 500; 
  mediaType:string='movie'
  imgPrefix:string='https://www.themoviedb.org/t/p/w220_and_h330_face/';

  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService,private router: Router){}
  ngOnInit(): void {
  
    this._ActivatedRoute.paramMap.subscribe((params: ParamMap) => {
          this.pageNumber = params.get('id') || '';
          this._MoviesService.getAllMedia(this.mediaType,this.pageNumber).subscribe((movie:any) => {
        this.movies = movie.results;
        window.scrollTo(0, 0);
        });
  
        });
  }
   pageChange(pageNumber:any){
    this.router.navigate(['/movies', pageNumber])
  }
  }