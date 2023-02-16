import { Component } from '@angular/core';
import { GetapiService } from '../servicio/getapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
getdata:any []=[];
  constructor(public _services: GetapiService) {
    this._services.getdata<any[]>("").subscribe(data=>{
      this.getdata = data
      console.log(this.getdata);
    })
  }

}
