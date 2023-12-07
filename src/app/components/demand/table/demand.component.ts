import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemandService} from "../../../services/demand/demand.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit, OnDestroy{
  private _sub!: Subscription;
  demands: any[] = [];

  constructor(private demandService: DemandService) {
  }

  ngOnInit(): void {
    this._sub = this.demandService.getDemands().subscribe(
      data => this.demands = data.data,
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
