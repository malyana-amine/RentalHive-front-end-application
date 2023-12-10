import {Component, OnInit} from '@angular/core';
import {Devis, DevisService} from "../../services/devis/devis.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit{

  public devises:Devis[] = [];

  constructor(private devisService:DevisService) {
  }

  ngOnInit() {
   this.getDevises();
  }

  public getDevises(): void{
    this.devisService.getDevis().subscribe(
      (response:Devis[]) => {
        this.devises = response;
        console.log(response);
      });
  }
}
