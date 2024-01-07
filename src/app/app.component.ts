import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {  RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import $ from 'jquery';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent {
   
  title = 'Just Watch';   
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
 
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    $(document).ready(function () {  
      $('#loading .loader').fadeOut(300,function () {
          $('#loading').fadeOut(300,function () { 
            $("#loading").remove();
            $('body').css('overflow-y', 'auto');
           });
        }); 
    });
  }
  
  }

} 
