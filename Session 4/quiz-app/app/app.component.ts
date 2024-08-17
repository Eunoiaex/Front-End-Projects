import { Component } from '@angular/core';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, QuizFormComponent]
})
export class AppComponent {
  title = 'quiz-app';
}
