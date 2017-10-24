export interface User {
  'id': number;
  'login': string;
  'email': string;
  'registeredDate': string;
  'loginDate': string;
  'birthDate': string;
  'roles': {
    'id': number;
    'name': string;
  }[];
  'active': boolean;
  'age': number;
  'avatar': string;
}
