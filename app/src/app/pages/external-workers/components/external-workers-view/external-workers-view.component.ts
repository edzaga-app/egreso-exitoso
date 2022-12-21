import { Component, OnInit, ViewChild } from '@angular/core';
import { ExternalWorkersService } from '../../services/external-workers.service'
import { ExternalWorkersFormComponent } from '../external-workers-form/external-workers-form.component'
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ExternalWorkers } from '../../interfaces/external-workers';
import { SendData } from '../../interfaces/send-data';
import { Mode } from 'src/app/shared/models/mode';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'utp-external-workers-view',
  templateUrl: './external-workers-view.component.html',
  styleUrls: ['./external-workers-view.component.scss']
})
export class ExternalWorkersViewComponent implements OnInit {

  utpMedium = false;
  utpSmall = false;
  title: string = 'Trabajadores Externos'
  externalWorkersInformation: ExternalWorkers[] = [];

  sendData!: SendData;

  headerColumnNames: string[] = ['CEDULA', 'NOMBRE', 'CORREO', 'NUMERO CONTACTO',
    'COMPAÑIA', 'INFORMACION CONTACTO', 'DESCRIPCION', 'ACCIONES'];
  displayedColumns: string[] = ['identificationNumber', 'worker',
    'email', 'contactNumber', 'idCompany', 'contactInformation',
    'description'];

  pageSize: number = 5;
  pageNumber: number = 1;
  pageSizeOptions: number[] = [5, 10];

  dataSource !: MatTableDataSource<ExternalWorkers>;

  @ViewChild(MatTable) table!: MatTable<ExternalWorkers>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public externalWorkersViewService: ExternalWorkersService,
    private breakpointService: BreakpointObserver,
    public externalWorkersForm: MatDialog) { }

  ngOnInit(): void {
    this.externalWorkersViewService.getExternalWorkers('assets/data/externalWorkers.json').subscribe(data => {
      this.externalWorkersInformation = data;
      this.dataSource = new MatTableDataSource(this.externalWorkersInformation);
    });
    this.breakpointService
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        this.utpSmall = true;
        this.utpMedium = false;
        if (result.matches) {
          this.utpMedium = true;
          this.utpSmall = false;
        }
      });

  }

  openDialog(isEdit: boolean, row: ExternalWorkers | undefined) {
    const sendDataEnterprise = {
      data: !row ? {} : row,
      mode: !isEdit ? Mode.save : Mode.update
    };
    const dialogRef = this.externalWorkersForm.open(ExternalWorkersFormComponent,
      {
        width: '60%',
        data: sendDataEnterprise
      });

    dialogRef.afterClosed().subscribe((result: SendData) => {
      if (!result) return;

      if (result.mode == Mode.save) {
        const copiedData = this.externalWorkersInformation.slice();
        copiedData.unshift(result.data);
        this.externalWorkersInformation = copiedData;
        this.dataSource.data.unshift(result.data);
      } else {
        const copiedData = this.externalWorkersInformation.slice();
        const indexToEdit = this.externalWorkersInformation.map(obj => obj.idExternalWorker).indexOf(result.data.idExternalWorker);
        copiedData[indexToEdit] = result.data;
        this.externalWorkersInformation = copiedData;
        this.dataSource.data[indexToEdit] = result.data;
      }
    });
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

    this.externalWorkersInformation = this.dataSource.filteredData
    console.log(this.dataSource.filteredData)

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

