import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
//get trending movie and tv show 
  getTrinding(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5206488c7aa84b6eca70d87a8e27cf71`)
  }
  //get the movie and tv show details by id 
  getMediaDetails(nameType:string,id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${nameType}/${id}?api_key=5206488c7aa84b6eca70d87a8e27cf71`)
  }
  //get the movie and tv show recomandation
  getMediaRecomandation(nameType:string,id:string):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/${nameType}/${id}/recommendations?api_key=5206488c7aa84b6eca70d87a8e27cf71`)
  }
  //get the movie and tv show videos 
  getMediaVideo(nameType:string,id:string):Observable<any>
  {
    return  this._HttpClient.get(`https://api.themoviedb.org/3/${nameType}/${id}/videos?api_key=5206488c7aa84b6eca70d87a8e27cf71`)
  }
 //get the movie and tv show popular 
  getAllMedia(nameType:string,page:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${nameType}/popular?api_key=f3f9cb36783b2ff28a9f29633c97d9b6&page=${page}`)
  }
  //get tv season number 
  getTvSeason(SeasonNum:number,id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/${SeasonNum}?api_key=5206488c7aa84b6eca70d87a8e27cf71`)
  }
  //get person work and details 
  personWork(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=5206488c7aa84b6eca70d87a8e27cf71`)
  }
  
}
 