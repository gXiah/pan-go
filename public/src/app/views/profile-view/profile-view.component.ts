import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

	profile: any

  	constructor(private profileService: ProfileService) { }

  	ngOnInit(): void {}



}
