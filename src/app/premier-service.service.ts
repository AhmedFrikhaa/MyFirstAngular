import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierServiceService {

  data =[
    'data1',
    'data2',
    'data3',
    'data4',
    'data5',
  ]
  constructor() { }
  logger(data:any){
    console.log(this.data)
  }
  addData(data:any){
    this.data.push(data);
    console.log(data);
  }
}
