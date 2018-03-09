import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected=this.selectedQuestion.asObservable();

    private selectedQuiz= new Subject<any>();
    quizSelected=this.selectedQuiz.asObservable();
    constructor(private http: HttpClient){

    }

    getQuestions(){
      return  this.http.get('http://localhost:52980/api/questions')

    }

    getQuizzes(){
        return  this.http.get('http://localhost:52980/api/quizzes')
  
      }

    postQuestion(question){
        console.log(question+'-uuu')
        this.http.post('http://localhost:52980/api/questions',question).subscribe(res=>{
            console.log(res+'-api.sevice.ts l22')
        }        )
     

    }

    putQuestion(question){
        this.http.put(`http://localhost:52980/api/questions${question.id}`,question).subscribe(res=>{
            console.log(res+'-api.sevice.ts PUT')
        }        )
    }


    postQuiz(quiz){
        console.log(quiz+'-uuu')
        this.http.post('http://localhost:52980/api/quizzes',quiz).subscribe(res=>{
            console.log(res+'-api.sevice.ts Quiz')
        }        )
     

    }
    putQuiz(quiz){
        this.http.put(`http://localhost:52980/api/quizzes${quiz.id}`,quiz).subscribe(res=>{
            console.log(res+'-api.sevice.ts PUT')
        }        )
    }
    selectQuestion(question){
         this.selectedQuestion.next(question)
    }
    
    selectQuizzes(quiz){
        this.selectedQuiz.next(quiz)
   }



}