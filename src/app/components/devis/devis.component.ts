import {Component, OnInit} from '@angular/core';
import {Devis, DevisService} from "../../services/devis.service";

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit{
  constructor(private devisService:DevisService) {
  }
  devises:Devis[] = [];
  ngOnInit() {
    this.devisService.getDevis().subscribe((data:Devis[]) => {
      this.devises = data;
      console.log(data);
    });
  }
}
