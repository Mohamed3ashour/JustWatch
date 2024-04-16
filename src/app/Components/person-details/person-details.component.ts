import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss'
})
export class PersonDetailsComponent {
  wordLimit:number=200;
  showMore:boolean;
  id:string;
  mediaType:string='person';
  personDetail:any={};
  personWork:any [] =[];
  imgPrefix:string='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService){
    this.id=_ActivatedRoute.snapshot.params['id'];
    this.showMore=false;
  }
  ngOnInit(): void {

    this._MoviesService.getMediaDetails(this.mediaType,this.id).subscribe((data) =>{
      this.personDetail=data;
      window.scrollTo(0, 0);
    });
    this._MoviesService.personWork(this.id).subscribe((data) =>{
      this.personWork=data.cast;
    });
  } 

  
}
