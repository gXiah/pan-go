import { Component, OnInit } from '@angular/core';

import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	currentSession = {_id:null};
	sessionOk = false;

 	constructor(private profileService: ProfileService){

  		this.currentSession["_id"] = localStorage.getItem('_id');
  		// this.currentSession["x-access-token"] = localStorage.getItem('x-access-token');
  		// this.currentSession["x-refresh-token"] = localStorage.getItem('x-refresh-token');
  		
  		// Checking session validity
  		// For this showcase version, we will trust the back-end API and not double check
  		if(typeof this.currentSession._id !== 'undefined'){
  			if(this.currentSession._id !== null){
  				this.sessionOk = true;
  			}
  		}

	}

	ngOnInit(): void {
	}


  	signOut(){
  		console.log("Signing out ...");
  		this.sessionOk = false;
  		this.profileService.logout();
  	}



}
