import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/register-form/register-form.component';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {EquipmentComponent} from "./components/equipment/equipment.component";
import {DemandComponent} from "./components/demand/demand.component";

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {path: "equipment", component: EquipmentComponent},
      {path: "demand", component: DemandComponent},
      {path: "", redirectTo: "equipment", pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
