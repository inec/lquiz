import { Component } from '@angular/core';


@Component({
    selector: 'question',
    templateUrl:'./question.component.html'
})
export class QuestionComponent {

    post(){
        console.log("test")
    }

}