import { HttpClientModule ,HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  
   add(data: any) {
    return  this.http.post<any>('http://192.168.1.63:8003/documents/doc/',data);
  }

   get() {
    return  this.http.get<any[]>('http://192.168.1.63:8003/documents/doc/all/');
  }
   delete(id: any) {
    const url = `http://192.168.1.63:8003/documents/doc/${id}/`;
    return  this.http.delete<any>(url);
  }
  requestdelete(id : any ){
    const url = `http://192.168.1.63:8003/documents/requestdelete/${id}/`;
    return  this.http.delete<any>(url);  }
   getrequests() {
    return  this.http.get<any>('http://192.168.1.63:8003/documents/requestslist/');
  }

   addrequest(data: any) {
    return  this.http.post<any>('http://192.168.1.63:8003/documents/requests/',data);
  }

   download(id: any) {
    const url = `http://192.168.1.63:8003/documents/doc/${id}/download/`;
    return  this.http.get<any>(url);
  }
  
}
