import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse,  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http:HttpClient) { }
  
  TriggerMail(data){
    this.http.post<any>('url here', data).subscribe(data => {
    console.log(data)
})
  }
}
