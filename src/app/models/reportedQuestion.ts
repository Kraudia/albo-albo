export class ReportedQuestion {
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
  reason: string;
  reportedDate: string;
}
