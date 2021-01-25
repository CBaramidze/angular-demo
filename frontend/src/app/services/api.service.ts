import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(path: string, httpOptions? : any): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, httpOptions)
  }

  post(path: string, data: any, httpOptions?: any): Observable<any>{
    return this.http.post(`${environment.api_url}${path}`, data, httpOptions)
  }
}
