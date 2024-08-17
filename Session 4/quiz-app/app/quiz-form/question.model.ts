export interface QuestionOption {
    label: string;
  }
  
  export interface Question {
    type: string;
    question: string;
    options?: QuestionOption[]; 
    answer?: string | string[]; 
  }
  