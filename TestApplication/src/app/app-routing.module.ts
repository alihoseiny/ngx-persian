import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PipesTestComponent} from './pipes-test/pipes-test.component';
import {ValidatorFunctionsComponent} from './validator-functions/validator-functions.component';

const routes: Routes = [
  {path: 'pipes', component: PipesTestComponent},
  {path: 'validators', component: ValidatorFunctionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
