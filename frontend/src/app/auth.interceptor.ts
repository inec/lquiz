import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 
    constructor(private http: HttpClient){

    }

    intercept(req,next){

      var token = localStorage.getItem('token')
      //console.log(req)
      var authRequest = req.clone({
          header: req.headers.set('Authorization',`Bearer $(token)`)
      })
      
      return next.handle(authRequest)
    }
    


}