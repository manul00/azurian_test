import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from './components/table/table.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
{path: '',component:HomeComponent},
{path: '',component:HomeComponent},
{path:'users',component:TableComponent},
{path: '**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
