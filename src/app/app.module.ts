import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DemandComponent } from './components/demand/table/demand.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { DemandDetailsComponent } from './components/demand/demand-details/demand-details.component';
import { DemandFormComponent } from './components/demand/demand-form/demand-form.component';
import { DevisComponent } from './components/devis/devis.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    DemandComponent,
    EquipmentComponent,
    DemandDetailsComponent,
    DemandFormComponent,
    DevisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
