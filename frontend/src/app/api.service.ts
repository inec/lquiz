import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected=this.selectedQuestion.asObservable();

    constructor(private http: HttpClient){

    }

    getQuestions(){
      return  this.http.get('http://localhost:52980/api/questions')

    }


    postQuestion(question){
        console.log(question+'-uuu')
        this.http.post('http://localhost:52980/api/questions',question).subscribe(res=>{
            console.log(res+'-api.sevice.ts l22')
        }        )
     

    }


    selectQuestion(question){
         this.selectedQuestion.next(question)
    }
    

}