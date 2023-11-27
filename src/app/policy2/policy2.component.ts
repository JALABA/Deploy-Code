import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Clients } from './details/insurer'



@Component({
  selector: 'app-policy2',
  templateUrl: './policy2.component.html',
  styleUrl: './policy2.component.scss'
})
export class Policy2Component {

  details: Clients[] = [];
  ctr:any;


  constructor(private http: HttpClient){}




ngOnInit(): void{
this.getMethod();

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
