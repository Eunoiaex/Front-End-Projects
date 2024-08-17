import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class QuizFormComponent {
  questions: { question: string, type: string, options?: string[] }[] = [];
  newQuestion: string = '';
  newQuestionType: string = 'Short Answer';
  newOptions: string[] = [];
  isMultiOption: boolean = false;

  onQuestionTypeChange() {
    this.isMultiOption = ['Multiple Choice', 'Checkboxes', 'Dropdown'].includes(this.newQuestionType);
    if (!this.isMultiOption) {
      this.newOptions = [];
    }
  }

  addOption() {
    if (this.newOptions.length < 5) {  
      this.newOptions.push('');  
    }
  }

  addQuestion() {
    if (this.newQuestion.trim()) {
      this.questions.push({
        question: this.newQuestion,
        type: this.newQuestionType,
        options: [...this.newOptions]
      });
      this.newQuestion = ''; 
      this.newOptions = [];  
    }
  }

  deleteQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  updateOption(event: any, index: number) {
    this.newOptions[index] = event.target.value;
  }
}
