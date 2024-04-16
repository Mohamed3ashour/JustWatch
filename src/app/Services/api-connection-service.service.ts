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
  //set user data behavior subject from local storage token 
  setUserData():void
  {
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any=jwtDecode(encodedToken);
    this.userData.next(decodedToken);
  };

  //register api function 
  registerApi(userData:object):Observable<any>
  {
     return this._HttpClient.post('https://movies-api.routemisr.com/signup', userData);
  };

  //login api function 
  loginApi(userData:object):Observable<any>
  {
     return this._HttpClient.post('https://movies-api.routemisr.com/signin', userData);
  };

  //logout api function by removing token from local storage 
  logOut():void
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  };

}
