import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Enterprise } from 'src/app/pages/enterprise/interfaces/enterprise-form';
import { EnterpriseService } from 'src/app/pages/enterprise/services/enterprise.service';
import { InformationSystems } from 'src/app/pages/information-systems/interfaces/information-systems';
import { InformationSystemsService } from 'src/app/pages/information-systems/services/information-systems.service';
import { SendDataTableDialog } from 'src/app/shared/interfaces/send-data';
import { Mode } from 'src/app/shared/models/mode';
import { ModuleForm } from '../../interfaces/module-form';
import { ModulesService } from '../../services/modules.service';


@Component({
  selector: 'utp-modules-form',
  templateUrl: './modules-form.component.html',
  styleUrls: ['./modules-form.component.scss']
})
export class ModulesFormComponent implements OnInit {
  utpMedium = false;
  mode!: Mode;

  constructor(public modulesViewService: ModulesService,
    public formBuilder: FormBuilder,
    private breakpointService: BreakpointObserver,
    @Inject(MAT_DIALOG_DATA) public data: SendDataTableDialog<ModuleForm>,
    public enterpriseService: EnterpriseService,
    public informationSystemService: InformationSystemsService,) { }



  checkoutForm = this.formBuilder.group({
    idModule: null,
    module: '',
    description: '',
    requirementsInclusionDate: null,
    moduleStartDate: null,
    moduleTerminationDate: null,
    operationStartDate: null,
    moduleRetirementDate: null,
    gitPath: '',
    moduleServerPath: '',
    moduleAudit: null,
    testStartDate: null,
    testTerminationDate: null,
    idType: '',
    idCompany: '',
    registerCreationDate: null,
    idInformationSystem: '',
    idServer: null,
  }) as any;

  enterprisesOptions: Partial<Enterprise>[] = [];
  informationSystemsOptions: InformationSystems[] = [];
  myControl = new FormControl();

  ngOnInit() {
    if (Mode.update || Mode.delete) {
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
      this.enterprisesOptions = data;

    });

    this.informationSystemService.getInformationSystems().subscribe(data => {
      this.informationSystemsOptions = data;
    })

  }

  onSubmit() {
    console.log('Su orden fue exitosa', this.checkoutForm.value)
    this.data.data = this.checkoutForm.value;
  }

}
