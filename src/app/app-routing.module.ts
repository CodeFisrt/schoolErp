import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './components/variables/variables.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NoRouteFoundComponent } from './components/no-route-found/no-route-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  // Default Route
  {
    path:'',
    redirectTo:'ng-Class',
    pathMatch: 'full'
  },
  {
    path:'variable',
    component: VariablesComponent,
    title:'Variable-page'
  },
  {
    path:'addUser/:id',
    component:AddUserComponent
  },
  {
    path:'ng-Class',
    component: NgClassComponent,
    title:'Ng-Class'
  },
  // wild Card Route
  {
    path:'**',
    component:NoRouteFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
