import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient){

    }
    postQuestion(question){
        console.log(question+'-uuu')
        this.http.post('',question).subscribe(res=>{
            console.log(res+'-e')
        }        )
     

    }

}