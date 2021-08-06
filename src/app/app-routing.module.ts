import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCityComponent } from './current-city/current-city.component';
import { SearchCityComponent } from './search-city/search-city.component';

const routes: Routes = [
  {path:'',redirectTo:'searchCity',pathMatch:'full'},
  {path:'searchCity',component:SearchCityComponent},
  {path:'currentLocation',component:CurrentCityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
