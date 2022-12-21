import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnterpriseService } from '../../services/enterprise.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Mode } from 'src/app/shared/models/mode';
import { Enterprise } from '../../interfaces/enterprise-form';
import { SendData } from '../../interfaces/send-data';


@Component({
  selector: 'utp-enterprise-form',
  templateUrl: './enterprise-form.component.html',
  styleUrls: ['./enterprise-form.component.scss']
})
export class EnterpriseFormComponent implements OnInit {
  utpMedium = false;
  enterpriseForm!: FormGroup;

  // checkoutForm = this.formBuilder.group({
  //   idCompany: null,
  //   company: '',
  //   nit: '',
  //   contactNumber: '',
  //   webPage: '',
  //   address: '',
  //   registerCreationDate: null
  // }) as any

  constructor(public enterpriseService: EnterpriseService,
    public formBuilder: FormBuilder,
    private breakpointService: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: SendData) { }


  ngOnInit() {
    this.initializedMode();
    this.enterpriseForm = this.buildForm(this.data.data);
    console.log(this.enterpriseForm.value);


    this.breakpointService
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        this.utpMedium = false;
        if (result.matches) {
          this.utpMedium = true;
        }
      })
  }

  initializedMode() {
    if (this.data.mode === Mode.update) {
      //this.checkoutForm.patchValue(this.data.data);
    }
  }

  buildForm(item: Partial<Enterprise>): FormGroup {
    return this.formBuilder.group({
      idCompany: [item.idCompany || ''],
      company: [item.company || '', Validators.required],
      nit: [item.nit || '', Validators.required],
      contactNumber: [item.contactNumber || '', Validators.required],
      webPage: [item.webPage || '', Validators.required],
      address: [item.address || '', Validators.required],
      registerCreationDate: [item.registerCreationDate || ''],
    })
  }

  onSubmit() {
    console.log('Su orden fue exitosa', this.enterpriseForm.value)
    this.data.data = this.enterpriseForm.value;


  }

}


