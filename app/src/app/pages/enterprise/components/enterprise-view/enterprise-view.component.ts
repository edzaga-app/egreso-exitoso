import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EnterpriseFormComponent } from '../enterprise-form/enterprise-form.component';
import { EnterpriseService } from '../../services/enterprise.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SendData } from '../../interfaces/send-data';
import { Enterprise } from '../../interfaces/enterprise-form';
import { Mode } from 'src/app/shared/models/mode';


@Component({
  selector: 'utp-enterprise-view',
  templateUrl: './enterprise-view.component.html',
  styleUrls: ['./enterprise-view.component.scss']
})
export class EnterpriseViewComponent implements OnInit {

  utpMedium = false;
  utpSmall = false;
  title: string = 'Empresas'
  enterprisesInformation: Enterprise[] = [];


  sendData!: SendData;

  headerColumnNames: string[] = ['NOMBRE', 'NIT', 'NUMERO CONTACTO', 'PAGINA WEB', 'DIRECCION', 'INSERSION REGISTRO', 'ACCIONES'];
  displayedColumns: string[] = ['company', 'nit', 'contactNumber', 'webPage', 'address', 'registerCreationDate'];


  pageSize: number = 5;
  pageNumber: number = 1;
  pageSizeOptions: number[] = [5, 10];

  dataSource !: MatTableDataSource<Enterprise>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public enterpriseService: EnterpriseService,
    private breakpointService: BreakpointObserver,
    public enterpriseForm: MatDialog) {

  }

  ngOnInit(): void {
    this.enterpriseService.getEnterprise().subscribe(data => {
      this.enterprisesInformation = data;
      this.dataSource = new MatTableDataSource(this.enterprisesInformation);

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

  openDialog(isEdit: boolean, row: Enterprise | undefined) {
    const sendDataEnterprise = {
      data: !row ? {} : row,
      mode: !isEdit ? Mode.save : Mode.update
    };
    const dialogRef = this.enterpriseForm.open(EnterpriseFormComponent,
      {
        width: '60%',
        data: sendDataEnterprise
      });

    dialogRef.afterClosed().subscribe((result: SendData) => {
      if (!result) return;

      if (result.mode == Mode.save) {
        const copiedData = this.enterprisesInformation.slice();

        copiedData.unshift(result.data);
        this.enterprisesInformation = copiedData;
        this.dataSource.data.unshift(result.data);
      } else {
        const copiedData = this.enterprisesInformation.slice();
        const indexToEdit = this.enterprisesInformation.map(obj => obj.idCompany).indexOf(result.data.idCompany);
        copiedData[indexToEdit] = result.data;
        this.enterprisesInformation = copiedData;
        this.dataSource.data[indexToEdit] = result.data;
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

    this.enterprisesInformation = this.dataSource.filteredData


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


