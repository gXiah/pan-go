import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ProfileService } from 'src/app/profile.service';


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

	constructor(private profileService: ProfileService){}

	ngOnInit(): void {}

	login(email: string, password: string){

		console.log("logging in");

		this.profileService
			.login(email, password)
			.subscribe((res: HttpResponse<any>) => {
				console.log(res);
			});
	}

}
