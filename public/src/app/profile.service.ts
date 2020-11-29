import { Injectable } from '@angular/core';
import { RequestHandlerService } from './request-handler.service';
import { Router } from '@angular/router';

import { HttpResponse, HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  	constructor(
  			private requestHandlerService : RequestHandlerService,
  			private router: Router,
  			private http: HttpClient
  	){}



  	login(email, password){
  		return this.requestHandlerService
					.login_post(
						'login',
						{email, password}
					)
					.pipe(
						shareReplay(),
						tap( (res: HttpResponse<any>) => {

							this.saveSessionLocally(
								res.body._id,
								res.headers.get('x-access-token'),
								res.headers.get('x-refresh-token')
							);

              this.router.navigateByUrl('/');

						})
					)
  	}

  		saveSessionLocally(id: string, token: string, refreshToken: string){
  			localStorage.setItem('_id', id);
  			localStorage.setItem('x-access-token', token);
  			localStorage.setItem('x-refresh-token', refreshToken);
  		}

  		getNewToken(){
  			return this.http.get(
  				'${this.requestHandlerService.ROOT}/token',
  				{ 
  					headers:{
  						'x-refresh-token': this.getRefreshToken(),
  						'_id': this.getProfileId()
  					},
  					observe: 'response'
  				}
  			).pipe(
  				tap( (res: HttpResponse<any>) => {
  					this.setToken(res.headers.get('x-access-token'));
  				})
  			);
  		}

  	logout(){
  		this.destroySessionLocally();
  		console.log("logging out");
  		this.router.navigateByUrl('/login');
  	}

  		destroySessionLocally(){
  			localStorage.removeItem('_id');
  			localStorage.removeItem('x-access-token');
  			localStorage.removeItem('x-refresh-token');	
  		}

  	getToken(){
  		return localStorage.getItem('x-access-token');
  	}
  	getRefreshToken(){
  		return localStorage.getItem('x-refresh-token');
  	}
  	getProfileId(){
  		return localStorage.getItem('_id');
  	}

  	setToken(token: string){
  		localStorage.setItem('x-access-token', token);
  	}


  updateProfile(
    id: string,
    email: string,
    name: string, age: number,
    family: string, race: string,
    food : string
  ){

    return this.requestHandlerService.patch(
      'update-profile',
      {
        'id':id, 
        'email':email,
        'name': name, 'age': age,
        'family': family, 'race': race,
        'food': food
      }
    );

  }

	createProfile(
		email: string, password: string,
		name: string, age: number,
		family: string, race: string,
		food : string
	){

		return this.requestHandlerService.post(
			'register',
			{	
				email, password,
				name, age,
				family, race,
				food
			}
		);

	}

		createRandomProfile(){

			let rand_suff = Math.floor(Math.random() * 100);

			return this.requestHandlerService.post(
				'register',
				{
					email: "test#" + rand_suff + "@provider.com", 
					password: "password#" + rand_suff,
					name: "Test Profile #"+rand_suff, age: 1,
					family: "Family #"+rand_suff, race: "Test Race",
					food: ["Food1"]
				}
			);


		}

	getAllProfiles(){
		return this.requestHandlerService.get('search');
	}

	getSearchProfiles(query: string){
		return this.requestHandlerService.get(`search/${query}`);

	}

  getProfileById(id: number){
    return this.requestHandlerService.get(`search/id/${id}`);
  }

}
