import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse,  HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http:HttpClient) { }
  downloadFile(): Observable<any>{		
    console.log("click")
		return this.http.get('C:/Users/dsumanth.PARTNERS/Desktop/RecentOrder_195204.doc', { responseType: "blob" });
   }
}
