import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule ,OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,CarouselModule,RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
}) 
export class HeaderComponent {

   headeTrinding:any[]=[];
  imgPrefix:string='https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  public isDragging: boolean = false;
  public timeoutId: any;

  
  constructor(private _MoviesService:MoviesService){}
  

  ngOnInit(): void {
    this._MoviesService.getTrinding('all').subscribe((data) =>{
      this.headeTrinding=data.results;
    });
  }
  
  customOptions: OwlOptions = {
    loop: true,
    margin:8,
    mouseDrag: true,
    touchDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      } 
    },
    
    nav: true,

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
