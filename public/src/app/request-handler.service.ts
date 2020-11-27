import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

	readonly ROOT;
  headers;

  	constructor(private http: HttpClient){
  		this.ROOT = 'http://localhost:8080';
      
      this.headers = new HttpHeaders();
  	}

  	get(uri: string){
  		return this.http.get(`${this.ROOT}/${uri}`);
  	}

  	delete(uri: string){
  		return this.http.delete(`${this.ROOT}/${uri}`);
  	}

  	post(uri: string, payload: Object){
  		return this.http.post(`${this.ROOT}/${uri}`, payload);
  	} 
      login_post(uri: string, payload: Object){
        return this.http.post(`${this.ROOT}/login`, payload, { observe: 'response' });
      }

  	patch(uri: string, payload: Object){
  		return this.http.patch(`${this.ROOT}/${uri}`, payload);
  	}

}
