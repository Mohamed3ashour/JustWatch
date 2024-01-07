import { CanActivateFn } from '@angular/router';
import { ApiConnectionServiceService } from './api-connection-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const _ApiConnectionServiceService=inject(ApiConnectionServiceService);
  const router = inject(Router);

  if (_ApiConnectionServiceService.userData.getValue() != null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
