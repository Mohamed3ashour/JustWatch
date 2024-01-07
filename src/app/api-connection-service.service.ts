import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectionServiceService {

  userData=new BehaviorSubject(null); 
  
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if (typeof window !== 'undefined'){
    if(localStorage.getItem('userToken') != null){
      this.setUserData();
    }
  }
  }; 
    
  setUserData():void
  {
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any=jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  };

  registerApi(userData:object):Observable<any>
  {
     return this._HttpClient.post('https://movies-api.routemisr.com/signup', userData);
  };
  loginApi(userData:object):Observable<any>
  {
     return this._HttpClient.post('https://movies-api.routemisr.com/signin', userData);
  };

  logOut():void
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  };

}
