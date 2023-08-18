import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { LeftsidebarComponentComponent } from './components/leftsidebar-component/leftsidebar-component.component';
import { CentreComponentComponent } from './components/centre-component/centre-component.component';
import { RightsidebarComponentComponent } from './components/rightsidebar-component/rightsidebar-component.component';

const routes: Routes = [
  {
    path: 'header', 
    component: HeaderComponentComponent
  },
  {
    path: 'left-sidebar', 
    component: LeftsidebarComponentComponent
  },
  {
    path: 'right-sidebar', 
    component: RightsidebarComponentComponent
  },
  {
    path: 'centre', 
    component: CentreComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
