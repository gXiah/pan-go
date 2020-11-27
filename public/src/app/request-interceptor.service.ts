import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

	constructor(private profileService: ProfileService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{

		request = this.appendAuthHeader(request);
		console.log("Request intercepted");
		return next
				.handle(request)
				.pipe(
					catchError( (error: HttpErrorResponse) => {
						console.log(error);

						if(error.status === 401){
							this.profileService.logout();
						}

						return throwError(error);
					})
				);

	}

	appendAuthHeader(request: HttpRequest<any>){
		const token = this.profileService.getToken();

		if(token){
			return request.clone({
				setHeaders:{
					'x-access-token': token
				}
			});
		}

		return request;
	}
}
