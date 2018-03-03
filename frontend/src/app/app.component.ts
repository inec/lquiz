import { Component } from '@angular/core';
import { QuestionComponent } from './question.components';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'inec-mapp';
}
