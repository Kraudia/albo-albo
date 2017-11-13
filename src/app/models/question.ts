export class Question {
  acceptedDate: string;
  adultRated: boolean;
  answeredDate: string;
  answer_count: number;
  commentsCount: number;
  createdDate: string;
  favourite_count: number;
  firstAnswer: string;
  firstCount: number;
  id: number;
  minusCount: number;
  myAnswer: number;
  myFavourite: boolean;
  myVote: number;
  plusCount: number;
  secondAnswer: string;
  secondCount: number;
  shortLink: string;
  status: string;
  tags: {
    id: number,
    name: string
  }[];
  userId: number;
  userLogin: string;
  value: string;
  vote_count: number;
}
