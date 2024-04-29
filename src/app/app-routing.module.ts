import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariablesComponent } from './components/variables/variables.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NoRouteFoundComponent } from './components/no-route-found/no-route-found.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { GetAPIComponent } from './components/get-api/get-api.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
  // Default Route
  {
    path:'',
    redirectTo:'ng-Class',
    pathMatch:'full'
  },
  {
    path:'variable',
    component: VariablesComponent,
    title:'Variable-page'
  },
  {
    path:'counter',
    component: CounterComponent,
    title:'Variable-page'
  },
  {
    path:'data-binding',
    component: DataBindingComponent,
    title:'Variable-page'
  },
  {
    path:'addUser/:id',
    component:AddUserComponent,
    data: {
      icon:'fa fa-user',
      titlePage:'Add- User'
    }
  },
  {
    path:'ng-Class',
    component: NgClassComponent,
    title:'Ng-Class'
  },
  {
    path:'ng-for',
    component: NgForComponent,
    title:'Ng-Class'
  },
  {
    path:'ng-if',
    component: NgIfComponent,
    title:'Ng-Class'
  },
  {
    path:'get-API',
    component: GetAPIComponent,
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
