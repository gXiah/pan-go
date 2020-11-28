import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSearchViewComponent } from './views/contact-search-view/contact-search-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { MyContactsViewComponent } from './views/my-contacts-view/my-contacts-view.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';


const routes: Routes = [
	
	{ path: 'search', component: ContactSearchViewComponent },
		{ path: 'recherche', redirectTo: '/search', pathMatch: 'full' },
		{ path: '', redirectTo: '/search', pathMatch: 'full' },
	{ path: 'search/:query', component: ContactSearchViewComponent },


	{ path: 'register', component: RegistrationViewComponent},
		{ path: 'inscription', redirectTo: '/register', pathMatch: 'full' },

	{ path: 'login', component: LoginViewComponent },
		{ path: 'connexion', redirectTo: '/login', pathMatch: 'full' },

	{path: 'my-contacts', component: MyContactsViewComponent},
		{path: 'mes-contacts', redirectTo: '/my-contacts', pathMatch: 'full'},

	{path: 'my-profile/:id', component: ProfileViewComponent},
		{path: 'me/:id', redirectTo: '/my-profile/:id', pathMatch: 'full'},
		{path: 'mon-profile/:id', redirectTo: '/my-profile/:id', pathMatch: 'full'}	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
