import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
    selector: 'quizzes',
    templateUrl:'./quizzes.component.html'
})
export class QquizzesComponent {

    quiz={}
    quizzes
    constructor(private api: ApiService){}

    ngOnInit(){
        // this.api.getQuestions().subscribe(res=>{
        //     //console.log(res)
        //     this.questions=res
        // }        )
    }



}