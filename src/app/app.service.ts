import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
// import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }

  public postfunction(url:any, Id:any)
  {  
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    return this.http.post( url,Id )
    .pipe(map((response: any) => response
        ));
  }
}
