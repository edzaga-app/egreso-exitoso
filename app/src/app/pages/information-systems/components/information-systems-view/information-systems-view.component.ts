import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Mode } from 'src/app/shared/models/mode';
import { InformationSystemsFormComponent } from '../information-systems-form/information-systems-form.component';
import { InformationSystemsService } from '../../services/information-systems.service';
import { InformationSystems } from '../../interfaces/information-systems';
import { SendData } from '../../interfaces/send-data';

@Component({
  selector: 'utp-information-systems-view',
  templateUrl: './information-systems-view.component.html',
  styleUrls: ['./information-systems-view.component.scss']
})
export class InformationSystemsViewComponent implements OnInit {

  utpMedium = false;
  utpSmall = false;
  title: string = 'Sistemas de Informacion'
  informationSystemsInformation: InformationSystems[] = [];

  sendData!: SendData;

  headerColumnNames: string[] = ['NOMBRE', 'SIGLAS', 'DESCRIPCION', 'ACCIONES'];
  displayedColumns: string[] = ['informationSystem', 'abbreviation',
    'description'];

  pageSize: number = 5;
  pageNumber: number = 1;
  pageSizeOptions: number[] = [5, 10];

  dataSource !: MatTableDataSource<InformationSystems>;

  @ViewChild(MatTable) table!: MatTable<InformationSystems>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public informationSystemsViewService: InformationSystemsService,
    private breakpointService: BreakpointObserver,
    public informationSystemsForm: MatDialog) { }

  ngOnInit(): void {
    this.informationSystemsViewService.getInformationSystems().subscribe(data => {
      this.informationSystemsInformation = data;
      this.dataSource = new MatTableDataSource(this.informationSystemsInformation);
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

  openDialog(isEdit: boolean, row: InformationSystems | undefined) {
    const sendInformationSystems = {
      data: !row ? {} : row,
      mode: !isEdit ? Mode.save : Mode.update
    };
    const dialogRef = this.informationSystemsForm.open(InformationSystemsFormComponent,
      {
        width: '60%',
        data: sendInformationSystems
      });

    dialogRef.afterClosed().subscribe((result: SendData) => {
      if (!result) return;

      if (result.mode == Mode.save) {
        const copiedData = this.informationSystemsInformation.slice();
        copiedData.unshift(result.data);
        this.informationSystemsInformation = copiedData;
        this.dataSource.data.unshift(result.data);
      } else {
        const copiedData = this.informationSystemsInformation.slice();
        const indexToEdit = this.informationSystemsInformation.map(obj => obj.idInformationSystem).indexOf(result.data.idInformationSystem);
        copiedData[indexToEdit] = result.data;
        this.informationSystemsInformation = copiedData
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

    this.informationSystemsInformation = this.dataSource.filteredData
    console.log(this.dataSource.filteredData)

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
