import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countryApp';
}


export interface PeriodicElement {
  name: string;
  id: number;
  region: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', region: 1.0079, status: 'active'},
  {id: 2, name: 'Helium', region: 4.0026, status: 'active'},
  {id: 3, name: 'Lithium', region: 6.941, status: 'active'},
  {id: 4, name: 'Beryllium', region: 9.0122, status: 'active'},
  {id: 5, name: 'Boron', region: 10.811, status: 'active'},

];

/**
 * @title Basic use of `<table mat-table>`
 */
// @Component({
//   selector: 'table-basic-example',
//   styleUrls: ['table-basic-example.css'],
//   templateUrl: 'table-basic-example.html',
// })
// export class TableBasicExample {
//   displayedColumns: string[] = ['id', 'name', 'region', 'status'];
//   dataSource = ELEMENT_DATA;
// }
