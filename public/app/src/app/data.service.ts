import { Injectable } from "@angular/core";
import { HttpClient, HttpBackend } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllData(type: string) {
    // there are two api routes for data on the Backend... 'api/data' & 'api/user'
    let dataObj = {
      content: null,
      error: null
    };
    this.http.get(`api/${type}`).subscribe(
      (data: Response) => {
        dataObj.content = data;
        console.log(data);
      },
      err => (dataObj.error = JSON.stringify(err))
    );
    return dataObj;
  }
}
