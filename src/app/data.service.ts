import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "/tasks";
  deleteUrl = "/tasks/";
  Message:any;

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<any>(this.url);
  }

  addData(data){
    return this._http.post(this.url,data,httpOptions);
  }

  deleteData(data){
    return this._http.delete(this.deleteUrl + data._id); 
  }
}
