import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()
export class AuthService {

 
    constructor(private http: HttpClient){

    }

    register(quizId){
      return  this.http.get(`http://localhost:52980/api/questions/${quizId}`)




}