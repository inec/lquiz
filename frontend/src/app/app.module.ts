import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.components';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizComponent } from './quiz.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';


const routes=[
  {path:'',component:HomeComponent},
  {path:'question',component:QuestionComponent},
  {path:'question/:quizId',component:QuestionComponent},
  {path:'register',component:RegisterComponent},
  {path:'quiz',component:QuizComponent}
]
@NgModule({
  declarations: [
    AppComponent,QuestionComponent,QuestionsComponent,
    HomeComponent,NavComponent, 
    QuizComponent ,
    RegisterComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [ApiService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor ,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
