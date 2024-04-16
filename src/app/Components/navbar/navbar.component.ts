import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiConnectionServiceService } from '../../Services/api-connection-service.service';
// declare var $:any;
import $ from 'jquery';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isLogin : boolean = false;
  isNavbarCollapsed = false;
  constructor(private _ApiConnectionServiceService:ApiConnectionServiceService){};
  
  ngOnInit(): void {
    this._ApiConnectionServiceService.userData.subscribe(()=>{
    if (this._ApiConnectionServiceService.userData.getValue()!=null) {
      this.isLogin=true;
    } else {
      this.isLogin=false;
    }
   }
  )
  }

  callLogOut(){
    this._ApiConnectionServiceService.logOut();
  }

  // Close the navbar collapse when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbarCollapseElement = document.getElementById('navbarSupportedContent');
    const toggleButtonElement = document.querySelector('.navbar-toggler');

    if (
      navbarCollapseElement && !navbarCollapseElement.contains(event.target as HTMLElement) && !toggleButtonElement?.contains(event.target as HTMLElement)
    ) {
      this.isNavbarCollapsed = false;
    }
  }

isScrolled = false;

@HostListener("window:scroll")
onWindowScroll() {
      window.pageYOffset >= 60 ? (this.isScrolled = true) : (this.isScrolled = false);
}
}
