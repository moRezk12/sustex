import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalstorageService } from '../Services/localstorage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const localstorage = inject(LocalstorageService);
  let request = req;

  const token = localstorage.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next(request);

};
