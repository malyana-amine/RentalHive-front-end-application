import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevisComponent} from "./components/devis/devis.component";
import { RegistrationComponent } from './components/register-form/register-form.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {EquipmentComponent} from "./components/equipment/equipment.component";
import {DemandComponent} from "./components/demand/table/demand.component";
import {DemandDetailsComponent} from "./components/demand/demand-details/demand-details.component";
import {DemandFormComponent} from "./components/demand/demand-form/demand-form.component";

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {path: "equipment", component: EquipmentComponent},
      {path: "demand", component: DemandComponent},
      {path: "demand/:id", component: DemandDetailsComponent},
      {path: "demand-form", component: DemandFormComponent},
      { path: 'devis', component: DevisComponent },
      {path: "", redirectTo: "equipment", pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
