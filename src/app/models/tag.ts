export interface Tag {
  id: number;
  name: string;
  created_date: string;
  questions: {
    accepted: number;
    pending: number;
    rejected: number;
  };
  questionsCount: number;
}
