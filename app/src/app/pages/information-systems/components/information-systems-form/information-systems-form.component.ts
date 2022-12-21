import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mode } from 'src/app/shared/models/mode';
import { InformationSystemsService } from '../../services/information-systems.service';
import { SendData } from '../../interfaces/send-data';

@Component({
  selector: 'utp-information-systems-form',
  templateUrl: './information-systems-form.component.html',
  styleUrls: ['./information-systems-form.component.scss']
})
export class InformationSystemsFormComponent implements OnInit {
  utpMedium = false;

  constructor(public informationSystemsViewService:InformationSystemsService,
              public formBuilder:FormBuilder,
              private breakpointService: BreakpointObserver,
              @Inject(MAT_DIALOG_DATA) public data: SendData) { }



  checkoutForm = this.formBuilder.group({
    idInformationSystem: null,
    informationSystem: '',
    abbreviation: '',
    description: '',
    registerCreationDate: null
  }) as any;

  ngOnInit() {
    if (this.data.mode === Mode.update) {
      this.checkoutForm.patchValue(this.data.data);
    }

    this.breakpointService
    .observe([Breakpoints.Medium,Breakpoints.Large,Breakpoints.XLarge])
      .subscribe(result => {
        this.utpMedium = false;
        if (result.matches) {
          this.utpMedium = true;
        }
  })
}

  onSubmit(){
    console.log('Su orden fue exitosa',this.checkoutForm.value)
    this.data.data = this.checkoutForm.value;
  }
}

