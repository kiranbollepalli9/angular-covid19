import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { CountryReport } from 'src/CountryReport';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'todayRecovered'];
  countrywiseReports: CountryReport[];
  dataSource = new MatTableDataSource<CountryReport>(this.countrywiseReports);


  constructor(private service: RestService) { }

  ngOnInit(): void {
    this.getCountrywiseReports();
  }

  getCountrywiseReports() {
    this.service.getCountrywiseReports().subscribe(reports => {
      console.log('the result  \n', reports );
      this.dataSource.data = reports as CountryReport[];
    });
  }

}
