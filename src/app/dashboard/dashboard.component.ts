import { Component, ViewChild, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { CountryReport } from 'src/CountryReport';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'todayRecovered'];
  countrywiseReports: CountryReport[];
  dataSource = new MatTableDataSource<CountryReport>(this.countrywiseReports);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;



  constructor(private service: RestService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getCountrywiseReports();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  getCountrywiseReports() {
    this.service.getCountrywiseReports().subscribe(reports => {
      console.log('the result  \n', reports );
      this.dataSource.data = reports as CountryReport[];
    });
  }

}
