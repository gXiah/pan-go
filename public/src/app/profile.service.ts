import { Injectable } from '@angular/core';
import { RequestHandlerService } from './request-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  	constructor(private requestHandlerService : RequestHandlerService) { }

	createProfile(
		name: string, age: number,
		family: string, race: string,
		food : string
	){

		return this.requestHandlerService.post(
			'register',
			{
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

}
