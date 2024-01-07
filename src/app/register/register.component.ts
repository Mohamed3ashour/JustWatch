import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiConnectionServiceService } from '../api-connection-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent { 

  error:string='';
  constructor(private _ApiConnectionServiceService:ApiConnectionServiceService , private _Router:Router){}
  
  registerGroup:FormGroup = new FormGroup({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(2) , Validators.maxLength(12)]),
    last_name:new FormControl(null, [Validators.required , Validators.minLength(2) , Validators.maxLength(12)]),
    age:new FormControl(null , [Validators.required , Validators.min(12) , Validators.max(80)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][\w]{5,7}$/)]),

  })
  submitRegister(registerInfo:FormGroup){
    this._ApiConnectionServiceService.registerApi(registerInfo.value).subscribe((respons) =>{
           if (respons.message =='success') {
            this._Router.navigate(['/login'])            
           } else {
            this.error='email already registered';
           }
          },)  
  }

}
 