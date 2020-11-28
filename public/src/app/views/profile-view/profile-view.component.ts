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

	currentSession = {_id:null}
	query_id = null;
	sessionOk = false;

  	constructor(private profileService: ProfileService, private route: ActivatedRoute){
  		
  		this.currentSession["_id"] = localStorage.getItem('_id');

  		if(typeof this.currentSession._id !== 'undefined'){
  			if(this.currentSession._id !== null){

  				this.route.paramMap.subscribe( (params) => {
  					this.query_id = params['params'].id;
  				});

  				if(this.currentSession._id == this.query_id){
  					this.sessionOk = true;
  				}else{
  					this.sessionOk = false;
  				}

  			}
  		}

  		// for this showcase version, we do not double check the localStorage Id
  		this.profile = this.getProfileData();
  	}

  	ngOnInit(): void {}

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

}
