import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExternalWorkersService } from '../../services/external-workers.service'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SendData } from '../../interfaces/send-data';
import { Mode } from 'src/app/shared/models/mode';
import { EnterpriseService } from 'src/app/pages/enterprise/services/enterprise.service';
import { Enterprise } from 'src/app/pages/enterprise/interfaces/enterprise-form';



@Component({
  selector: 'utp-external-workers-form',
  templateUrl: './external-workers-form.component.html',
  styleUrls: ['./external-workers-form.component.scss']
})
export class ExternalWorkersFormComponent implements OnInit {
  utpMedium = false;

  constructor(public externalWorkersViewService: ExternalWorkersService,
    public formBuilder: FormBuilder,
    private breakpointService: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: SendData,
    public enterpriseService: EnterpriseService,) { }



  checkoutForm = this.formBuilder.group({
    idExternalWorker: [null],
    worker: '',
    identificationNumber: '',
    email: '',
    contactNumber: '',
    description: '',
    contactInformation: '',
    idCompany: '',
    registerCreationDate: null,
    status: null
  }) as any;

  options: Partial<Enterprise>[] = [];

  ngOnInit() {
    if (this.data.mode === Mode.update) {
      this.checkoutForm.patchValue(this.data.data);
    }

    this.breakpointService
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        this.utpMedium = false;
        if (result.matches) {
          this.utpMedium = true;
        }
      });

    this.enterpriseService.getEnterprise().subscribe(data => {
      this.options = data;



    });
  }



  onSubmit() {
    console.log('Su orden fue exitosa', this.checkoutForm.value)
    this.data.data = this.checkoutForm.value;
  }
}
