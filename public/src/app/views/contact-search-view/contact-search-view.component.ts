import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-contact-search-view',
  templateUrl: './contact-search-view.component.html',
  styleUrls: ['./contact-search-view.component.scss']
})
export class ContactSearchViewComponent implements OnInit {

    profiles: any;
    currentId: any;

  	constructor(private profileService: ProfileService){}

  	ngOnInit(): void {
  		this.getAllProfiles();
      this.currentId = localStorage.getItem('_id');

  	}

    
    getAllContacts(sourceId: any){
      
    }

  	getAllProfiles(){
  		this.profileService.getAllProfiles().subscribe(
  			(response: any) => { this.profiles = response; }
  		);
  	}

    getSearchProfiles(query: string){
      this.profileService.getSearchProfiles(query).subscribe(
        (response: any) => { this.profiles = response; }
      );
    }

}
