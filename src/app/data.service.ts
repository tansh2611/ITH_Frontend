import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "/tasks";
  deleteUrl = "/tasks/";
  Message: any;

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<any>(this.url)
    .catch((e: any) => Observable.throw(console.log("Error on UI : ", e)));;
  }

  addData(data) {
    return this._http.post(this.url, data, httpOptions)
    .catch((e: any) => Observable.throw(console.log("Error on UI : ", e)));;;
  }

  deleteData(data) {
    return this._http.delete(this.deleteUrl + data._id)
    .catch((e: any) => Observable.throw(console.log("Error on UI : ", e)));;;
  }
}
