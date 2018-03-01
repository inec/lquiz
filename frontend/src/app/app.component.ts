import { Component } from '@angular/core';
import { QuestionComponent } from './question.components';

@Component({
  selector: 'app-root',
  template: '<question></question><questions></questions>'
})
export class AppComponent {
  title = 'inec-mapp';
}
