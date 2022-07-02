import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:44364";

  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/InsertEmployee',val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/UpdateEmployee/',val)
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/DeleteEmployee/',val)
  }

  getAllEmployeeNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee');
  }
}
