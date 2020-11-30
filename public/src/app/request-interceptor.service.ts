import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, empty } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';

import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})

/*******
REQUESTS INTERCEPTORS
*/

// This class' main role is to intercept sent queries and, if the requesting user is ...
// ... correctly identified, to append to the header the JWT tokens (and the user ID)


export class RequestInterceptorService implements HttpInterceptor {

	refreshedToken;

	constructor(private profileService: ProfileService) { }



	// Main interception method (refere to the HttpInterceptor Interface)
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any>{

		request = this.appendAuthHeader(request);

		return next
				.handle(request)
				.pipe(
					catchError( (error: HttpErrorResponse) => {
						console.log(error);


						// If 401 and user is not correctly authentified
						if(error.status === 401 && !this.refreshedToken){
							return this.refreshToken().pipe( // Tries to refresh token 
								switchMap( () => {
									request = this.appendAuthHeader(request);
									return next.handle(request);
								}),
								catchError( (err: any) => {
									this.profileService.logout();
									return empty();
								})
							);

						}else if(error.status === 401){ // If 401
							this.profileService.logout();
						}

						return throwError(error);
					})
				);

	}

		/*
		* Token refreshing method
		*/
		refreshToken(){

			this.refreshedToken = true;

			return this.profileService.getNewToken().pipe(
				tap( () => {
					this.refreshedToken = false;
					console.log('Access token refreshed');
				})
			);
		}


	/*
	* This method append data to the request header (Append the access token)
	*/
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
