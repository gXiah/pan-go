import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-contact-search-view',
  templateUrl: './contact-search-view.component.html',
  styleUrls: ['./contact-search-view.component.scss']
})
export class ContactSearchViewComponent implements OnInit {

    profiles: any; // Fetched profiles
    currentId: any; // Id of the requesting (authenticated) user

  	constructor(private profileService: ProfileService){}

  	ngOnInit(): void {
  		this.getAllProfiles();
      this.currentId = localStorage.getItem('_id');

  	}

    
    // Contacts feature has not been enabled in this showcase version
    getAllContacts(sourceId: any){
      
    }


    /**
    * Gets all profiles
    */
  	getAllProfiles(){
  		this.profileService.getAllProfiles().subscribe(
  			(response: any) => { this.profiles = response; }
  		);
  	}


    /**
    * Gets profiles by (search) query
    */
    getSearchProfiles(query: string){
      this.profileService.getSearchProfiles(query).subscribe(
        (response: any) => { this.profiles = response; }
      );
    }

}
