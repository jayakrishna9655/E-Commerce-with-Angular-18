import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }

    getemployee():Observable<any>{
    const url='https://fakestoreapi.com/products'
    return this.http.get<any>(url)
    }
  
  
    }

  

 