import {Component, OnDestroy, OnInit} from '@angular/core';
import {EquipmentService} from "../../services/equipment/equipment.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit, OnDestroy{
  private _sub!: Subscription;
  equipments: any[] = [];

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit(): void {
    this._sub = this.equipmentService.getEquipments().subscribe(
      data => this.equipments = data,
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
