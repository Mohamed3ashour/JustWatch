import { CanActivateFn } from '@angular/router';
import { ApiConnectionServiceService } from '../Services/api-connection-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

// auth guard function to check if user is logged in or not 
export const authGuardGuard: CanActivateFn = (route, state) => {
  const _ApiConnectionServiceService=inject(ApiConnectionServiceService);
  const router = inject(Router);
// if user is logged in it will return true else it will redirect user to login page
  if (_ApiConnectionServiceService.userData.getValue() != null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  } 
};