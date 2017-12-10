import { Question } from './question';
import { User } from './user';

export class ReportedComment {
  id: number;
  comment: {
    id:  number;
    value: string;
    createdDate: string;
    minusCount: number;
    plusCount: number;
    myRank: number;
    userLogin: string;
    userAvatar: string;
    userId: number;
    visible: boolean;
    user: User;
    question: Question;
  };
  reason: string;
  reportedDate: string;
  user: User;
}
