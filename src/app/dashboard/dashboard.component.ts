import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {DataService} from '../data.service';
import { Observable } from 'rxjs/Observable';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


/**
 * @title Table with filtering
 */
 @Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css']
 })
export class DashboardComponent implements OnInit {
  loaded = true;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<any>;

  ngOnInit() {

  }

  constructor(private dataService: DataService) {

    this.dataService.items.subscribe(data => {
      // Populate table;
      this.dataSource = new MatTableDataSource<any>(data);
    });

    dataService.items.subscribe(data => {
      this.dataSource.data = data;
    });
    console.log("Dashboard loaded");
  }

}
