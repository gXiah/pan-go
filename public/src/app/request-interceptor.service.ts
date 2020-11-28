import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';

import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

	refreshedToken;

	constructor(private profileService: ProfileService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{

		request = this.appendAuthHeader(request);

		return next
				.handle(request)
				.pipe(
					catchError( (error: HttpErrorResponse) => {
						console.log(error);

						if(error.status === 401 && !this.refreshedToken){
							return this.refreshToken().pipe(
								switchMap( () => {
									request = this.appendAuthHeader(request);
									return next.handle(request);
								}),
								catchError( (err: any) => {
									this.profileService.logout();
									return empty();
								})
							);

						}else if(error.status === 401){
							this.profileService.logout();
						}

						return throwError(error);
					})
				);

	}

		refreshToken(){

			this.refreshedToken = true;

			return this.profileService.getNewToken().pipe(
				tap( () => {
					this.refreshedToken = false;
					console.log('Access token refreshed');
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
