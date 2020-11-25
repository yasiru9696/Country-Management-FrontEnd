import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CountryService} from '../service/country.service';
import {Country} from '../model/country';
import {Router} from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'region', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any[]>();
  countryArray = new Array<Country>()


  constructor(private countryService:CountryService,private route:Router) { }

  ngOnInit(): void {
    this.getAll();
  }

   getAll() {

    this.countryService.getAll().subscribe(response=>{
      console.log(response)
      this.countryArray = response;
      // @ts-ignore
      this.dataSource.data=this.countryArray;
    })
  }

  newCountry(){
    this.route.navigate(['newcountry'])
  }

  edit(id:number){
    this.route.navigate(['newcountry',id])
  }

  delete(id: any) {
    this.countryService.delete(id).subscribe(res=>{
      if(res == "200"){
        alert("Successfully Deleted")
        this.getAll()
      }else{
        alert("Failed to Deleted")
      }
    })
  }
}
