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
  favQuestion: {
    accepted: number;
    pending: number;
    rejected: number;
  };
  questions: {
    accepted: number;
    pending: number;
    rejected: number;
  };
  votes: {
    accepted: number;
    pending: number;
    rejected: number;
  };
  users: {
    inactive: number;
    active: number;
  };
}
