import { Component, OnInit } from '@angular/core';
import {Country} from '../model/country';
import {FormControl} from '@angular/forms';
import {CountryService} from '../service/country.service';
import {resetFakeAsyncZone} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-manage-country',
  templateUrl: './manage-country.component.html',
  styleUrls: ['./manage-country.component.css']
})
export class ManageCountryComponent implements OnInit {

  stage ="SAVE";
  name: FormControl =  new FormControl('');
  region: FormControl =  new FormControl('');

  coutry:Country = new Country();
  constructor(private countryService:CountryService,private  routerActive:ActivatedRoute) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(params =>{
      if(params.id != null || params.id != undefined){
        this.stage="UPDATE";
        this.get(params.id);
      }
    });
  }

  save() {

    if(this.stage == "SAVE"){
      this.countryService.save(this.coutry).subscribe(res =>{

        if(res == "200"){
          alert("Successfully Saved")
        }else{
          alert("Failed to Save")
        }
      })
    }else{
      this.countryService.update(this.coutry).subscribe(res =>{

        if(res == "200"){
          alert("Successfully Updated")
        }else{
          alert("Failed to Update")
        }
      })
    }


    console.log(this.coutry)
  }

   get(id: any) {

    this.countryService.search(id).subscribe(res=>{
      this.coutry =res;
    })
  }
}
