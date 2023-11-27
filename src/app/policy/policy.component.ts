import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Clients } from './details/insurer'
import { SharedService } from "../shared/shared.service"

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent implements OnInit{

  details: Clients[] = [];
  ctr:any;


  constructor(private http: HttpClient, public shared:SharedService){}




ngOnInit(): void{
this.getMethod();
this.ctr=this.shared.getIndex();
}


public getMethod(){
  this.http.get<{[key: string]: Clients }>('https://run.mocky.io/v3/28a7ca02-bd73-4661-99ed-325cf3d94039')
  .pipe(map((data) => {
    const insurance = [];
    for(const key in data)
    {
      if(data.hasOwnProperty(key))
      {
        insurance.push({...data[key], id: key})
      }
        
    }
    return insurance;
  }))
  .subscribe((insurance)=>{
    console.log(insurance);
    this.details = insurance;
  
  });
}



}
