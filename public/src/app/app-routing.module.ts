import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSearchViewComponent } from './views/contact-search-view/contact-search-view.component';
import { RegistrationViewComponent } from './views/registration-view/registration-view.component';

const routes: Routes = [

	{ path: 'search', component: ContactSearchViewComponent },
		{ path: 'recherche', redirectTo: '/search', pathMatch: 'full' },
		{ path: '', redirectTo: '/search', pathMatch: 'full' },
	{ path: 'search/:query', component: ContactSearchViewComponent },

	{ path: 'registration', component: RegistrationViewComponent},
		{ path: 'inscription', redirectTo: '/registration', pathMatch: 'full' }

	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
