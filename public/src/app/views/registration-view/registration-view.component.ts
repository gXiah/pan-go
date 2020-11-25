import { Component, OnInit } from '@angular/core';

import { ProfileService } from 'src/app/profile.service';


@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.scss']
})
export class RegistrationViewComponent implements OnInit {

  	constructor(private profileService: ProfileService){}

	ngOnInit(): void {
	}

	newRandomProfile(){
		this.profileService
			.createRandomProfile()
			.subscribe( (response: any) => {
			console.log(response);
		});
	}

	// Note : For this version (Showcase version), food is considered a simple 'string' and Note
	// ... and array
	newProfile(
		name: string, age: number,
		family: string, race: string,
		food : string
	){
		this.profileService
			.createProfile(name, age, family, race, food)
			.subscribe( (response: any) => {
			console.log(response);
		});
	}

}
	