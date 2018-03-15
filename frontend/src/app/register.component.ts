import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { ApiService } from './api.service';


@Component({

    templateUrl:'./register.component.html'
})
export class RegisterComponent {
   
    form
    constructor(private api: ApiService,private fb: FormBuilder){

        
    }

    ngOnInit(){
    //this.api.quizSelected.subscribe(quiz => this.quiz=quiz)

    }
}