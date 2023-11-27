import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  index: any;
  constructor() { }
  setIndex(i){
    this.index = i
  };
  getIndex(){
    return this.index
  }
}
