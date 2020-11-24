import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSearchViewComponent } from './views/contact-search-view/contact-search-view.component';

const routes: Routes = [
	{ path: '', component: ContactSearchViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
