import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {DemandService} from "../../../services/demand/demand.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.css']
})
export class DemandFormComponent implements OnInit {
  demandForm!: FormGroup;

  constructor(private fb: FormBuilder, private _demandService: DemandService, private _router: Router) {
  }

  ngOnInit(): void {
    this.demandForm = this.fb.group({
      user: [''],
      equipment: this.fb.array([
        this.fb.group({
          equipmentId: [''],
          startDate: [''],
          endDate: [''],
        }),
      ]),
    });
  }

  get equipment(): FormArray {
    return this.demandForm.get('equipment') as FormArray;
  }

  addEquipment(): void {
    this.equipment.push(this.fb.group({
      equipmentId: [''],
      startDate: [''],
      endDate: [''],
    }));
  }

  removeEquipment(index: number): void {
    this.equipment.removeAt(index);
  }

  submitForm(): void {
    const formValue = this.demandForm.value;

    const userId = formValue.user;
    const equipmentIds = formValue.equipment.map((equipment: any) => equipment.equipmentId).join(',');
    const startDateList = formValue.equipment.map((equipment: any) => equipment.startDate).join(',');
    const endDateList = formValue.equipment.map((equipment: any) => equipment.endDate).join(',');

    const result = {
      userId: userId,
      equipmentIds: equipmentIds,
      startDateList: startDateList,
      endDateList: endDateList
    };

    console.log(result);

    this._demandService.createDemand(result).subscribe(
      data => console.log(data),
      err => console.error(err),
      () => {
        this._router.navigate(["/dashboard/demand"]);
      }
    )
  }
}
