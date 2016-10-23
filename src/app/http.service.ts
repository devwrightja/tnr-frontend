import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  getData() {
    return this.http.get('https://tnr-test.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }
  sendData(subscriber: any) {
    const body = JSON.stringify(subscriber);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://tnr-test.firebaseio.com/subscriber.json', body, {
      headers: headers
    })
    .map((data: Response) => data.json());
  }

}
