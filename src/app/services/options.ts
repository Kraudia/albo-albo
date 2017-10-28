import { Headers, RequestOptions } from '@angular/http';

const headers = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

const currentUser = localStorage.getItem('currentUser');

if (currentUser) {
  const username = JSON.parse(currentUser).username;
  const password = JSON.parse(currentUser).password;
  headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
}

export const options = new RequestOptions({ headers: headers });
