import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from "../shared/shared.service"

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit  {

  constructor(private router: Router, private shared:SharedService){}

index:any;



ngOnInit(): void{


}

  proceed(){
    this.router.navigateByUrl('/policy');
  
  }
  
  proceed1(){
    this.router.navigateByUrl('/policy1');
  
  }

  proceed2(){
    this.router.navigateByUrl('/policy2');
  
  }

  proceed3(){
    this.router.navigateByUrl('/policy3');
  
  }

  proceed4(){
    this.router.navigateByUrl('/policy4');
  
  }
  

sendIndex(index){
  this.shared.setIndex(this.index)
}
 

}
