import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DemandComponent } from './components/demand/table/demand.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    DemandComponent,
    EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
