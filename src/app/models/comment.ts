import { Question } from './question';
export interface Comment {
  id: number;
  value: string;
  createdDate: string;
  minusCount: number;
  plusCount: number;
  myRank: number;
  userAvatar: string;
  userLogin: string;
  userId: number;
  question: Question;
}
