import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SendDataTableDialog } from 'src/app/shared/interfaces/send-data';
import { Mode } from 'src/app/shared/models/mode';
import Swal from 'sweetalert2';
import { ModuleForm } from '../../interfaces/module-form';

import { ModulesFormComponent } from '../modules-form/modules-form.component';
import { ModulesService } from '../../services/modules.service';




@Component({
  selector: 'utp-modules-view',
  templateUrl: './modules-view.component.html',
  styleUrls: ['./modules-view.component.scss']
})
export class ModulesViewComponent implements OnInit {

  title: string = 'Modulos'
  modulesInformation: ModuleForm[] = [];

  mode = Mode;
  sendData !: SendDataTableDialog<ModuleForm>;


  headerColumnNames: string[] = ['NOMBRE', 'RUTA GIT', 'RUTA SERVIDOR', 'DESCRIPCION', 'SISTEMA INFORMACION', 'TIPO MODULO', 'EMPRESA', 'ACCIONES'];
  displayedColumns: string[] = ['module', 'gitPath', 'moduleServerPath', 'description', 'idInformationSystem', 'idType', 'idCompany'];

  pageSize: number = 5;
  pageNumber: number = 1;
  pageSizeOptions: number[] = [5, 10];

  dataSource !: MatTableDataSource<ModuleForm>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public modulesViewService: ModulesService,
    public modulesForm: MatDialog) { }

  ngOnInit(): void {
    this.modulesViewService.getApiModules().subscribe(data => {
      this.modulesInformation = data;
      this.dataSource = new MatTableDataSource(this.modulesInformation);
    });

  }

  openDialog(mode: Mode, data: ModuleForm | undefined) {
    const sendDataModule = { data, mode };

    const dialogRef = this.modulesForm.open(ModulesFormComponent,
      {
        width: '60%',
        data: sendDataModule
      });

    dialogRef.afterClosed().subscribe((result: SendDataTableDialog<ModuleForm>) => {
      if (!result) return;

      let indexToEdit!: number;
      const copiedData = this.modulesInformation.slice();

      switch (result.mode) {
        case Mode.save:
          copiedData.unshift(result.data);
          this.modulesInformation = copiedData;
          this.dataSource.data.unshift(result.data);
          break;
        case Mode.update:
          indexToEdit = this.modulesInformation.map(obj => obj.idModule).indexOf(result.data.idModule);
          copiedData[indexToEdit] = result.data;
          this.modulesInformation = copiedData;
          this.dataSource.data[indexToEdit] = result.data;
          break;
        default:
          break;
      }

    });
  }

  displayDeleteAlert(mode: Mode, data: ModuleForm) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: "No podra revertir esta accion!",
      icon: 'warning',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const copiedData = this.modulesInformation.slice();
        let indexToEdit = this.modulesInformation.map(obj => obj.idModule).indexOf(data.idModule);
        copiedData.splice(indexToEdit, 1);
        this.modulesInformation = copiedData;
        this.dataSource.data.splice(indexToEdit, 1);
        Swal.fire(
          'Borrado!',
          'EL registro fue eliminado exitosamente.',
          'success'
        )
      }
    })
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    this.modulesInformation = this.dataSource.filteredData


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
