import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemandService} from "../../../services/demand/demand.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-demand-details',
  templateUrl: './demand-details.component.html',
  styleUrls: ['./demand-details.component.css']
})
export class DemandDetailsComponent implements OnInit, OnDestroy {
  demand: any | undefined;
  constructor(private _demandService: DemandService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get("id"));
    this._demandService.getDemand(id).subscribe(
      data => this.demand = data.data,
      err => console.error(err)
    )
  }

  ngOnDestroy(): void {
  }

  downloadPdf(contractId: number): void {
    this._demandService.downloadPdf(contractId).subscribe((data: Blob) => {
      const pdfData = new URL(window.URL.createObjectURL(data), location.origin);
      const anchor = document.createElement('a');
      anchor.href = pdfData.toString();
      anchor.download = contractId + 'contract.pdf';
      anchor.click();
    });
  }
}
