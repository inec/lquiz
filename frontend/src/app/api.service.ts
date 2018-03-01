import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient){

    }

    getQuestions(){
      return  this.http.get('http://localhost:52980/api/questions')

    }


    postQuestion(question){
        console.log(question+'-uuu')
        this.http.post('http://localhost:52980/api/questions',question).subscribe(res=>{
            console.log(res+'-e')
        }        )
     

    }

    

}