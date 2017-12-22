export interface User {
  'id': number;
  'login': string;
  'email': string;
  'registeredDate': string;
  'bannedUntil': string;
  'loginDate': string;
  'birthDate': string;
  'roles': string[];
  'isBanned': boolean;
  'isActive': boolean;
  'points': number;
  'age': number;
  'avatar': string;
}
