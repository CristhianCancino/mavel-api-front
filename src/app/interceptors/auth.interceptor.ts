import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Aquí se llamaría al método para obtener el token codificado
  const encodedCredentials = btoa(environment.c_credentials.user + environment.c_credentials.pass)
  console.log(encodedCredentials);
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Basic ${encodedCredentials}`)
  });
  console.log('Request headers:', req.headers.keys());
  return next(authReq);
  
};