export class ReportedComment {
  id: number;
  question: {
    id: number;
    value: string;
    createdDate: string;
    acceptedDate: string;
    firstAnswer: string;
    secondAnswer: string;
    status: string;
    adultRated: boolean;
    shortLink: string;
  };
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
    question: {
      secondAnswer: string;
      id: number;
      value: string;
      shortLink: string;
      firstAnswer: string;
    }
  };
  reason: string;
  reportedDate: string;
}
