import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Devis} from "../services/devis/devis.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DevisModule implements Devis{
  constructor(
    id?: number,
    status?:string,
    priceTotal?:number,
    contract?:object) {
  }
}

