export class Question {
  acceptedDate: string;
  addedDate: string;
  adultRated: boolean;
  answeredDate: string;
  answerCount: number;
  commentCount: number;
  createdDate: string;
  favouriteCount: number;
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
  voteCount: number;
}
