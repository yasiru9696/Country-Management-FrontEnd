import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../model/country';

const main_url="http://localhost:8080/rest/v2";
const county_url="/country";

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

   getAll(){
    return this.http.get<Array<Country>>(main_url+county_url);
   }

   save(county:Country){
    return this.http.post(main_url+county_url,county)
   }

  update(county:Country){
    return this.http.put(main_url+county_url,county)
  }

  search(id:number){
    return this.http.get<Country>(main_url+county_url+"/"+id)
  }

  delete(id:number){
    return this.http.delete(main_url+county_url+"/"+id)
  }
}
