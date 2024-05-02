import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,

  children: [
    { path: '', pathMatch: 'full', redirectTo: 'home' }, // Redirects empty path to '/home'
    { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: 'contact-us', loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsModule) }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
