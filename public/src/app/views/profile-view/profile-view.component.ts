import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

	profile: any

	currentSession = {_id:null} // User requesting data
	query_id = null; // Requested profile ID 
	sessionOk = false; // If logged in user is actually requesting his/her own data or not

  	constructor(private profileService: ProfileService, private route: ActivatedRoute){
  		
  		this.currentSession["_id"] = localStorage.getItem('_id');

  		if(typeof this.currentSession._id !== 'undefined'){
  			if(this.currentSession._id !== null){ // If session ID is set

  				this.route.paramMap.subscribe( (params) => { // Get id from params
  					this.query_id = params['params'].id;
  				});

  				if(this.currentSession._id == this.query_id){ // If the requesting user is requesting his/her own profile
  					this.sessionOk = true;
  				}else{ // else ...
  					this.sessionOk = false;
  				}

  			}
  		}

  		// for this showcase version, we do not double check the localStorage Id
  		this.profile = this.getProfileData();
  	}

  	ngOnInit(): void {}


    /**
    * This is the method that fetches a profile data
    */
    // Note : In this version, the extra security (refer to 'sessionOk' above) has been removed ...
    // ... and the check is done directly from the form (Not secure, but enough for a showcase version)
  	getProfileData(){
  		// if(this.sessionOk){
  			this.profileService
  				.getProfileById(this.query_id)
  				.subscribe( (res: any) => {
  					console.log(res);
  					return this.profile = res;
  				});
  		// }
  	}


    /**
    * Update profile method
    */
    // Note : in this version, a password cannot be updated (changed)
    updateProfile(
      email: string,
      name: string, age: number,
      family: string, race: string,
      food : string
    ){

      if(this.sessionOk){

        this.profileService
          .updateProfile(this.currentSession._id, email, name, age, family, race, food)
          .subscribe( (res: any) => {
            console.log(res);
          });

      }

      
    }

}
