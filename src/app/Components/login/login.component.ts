import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiConnectionServiceService } from '../../Services/api-connection-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 

  error:string='';
  constructor(private _ApiConnectionServiceService:ApiConnectionServiceService , private _Router:Router){}
  
  loginGroup:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][\w]{5,7}$/)]),
  })
  submitLogin(registerInfo:FormGroup){
    this._ApiConnectionServiceService.loginApi(registerInfo.value).subscribe((respons) =>{
           if (respons.message =='success') {
            localStorage.setItem('userToken',JSON.stringify( respons.token));
            this._ApiConnectionServiceService.setUserData();
            this._Router.navigate(['/home'])            
           } else {
            this.error='email or password is wrong';
           }
          },)   
  }

}
 

