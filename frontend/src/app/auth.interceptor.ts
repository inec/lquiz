import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 
    constructor(private http: HttpClient){

    }

    intercept(req,next){
      console.log(req)
      return next.handle(req)
    }
    


}