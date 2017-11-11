export interface Stats {
  answers: {
    acceptedQuestions: number;
    pendingQuestions: number;
    rejectedQuestions: number;
  };
  comments: {
    acceptedQuestions: number;
    pendingQuestions: number;
    rejectedQuestions: number;
  };
  questions: {
    accepted: number;
    pending: number;
    rejected: number;
  };
  users: {
    inactive: number;
    active: number;
  };
}
