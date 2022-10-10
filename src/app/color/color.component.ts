import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color='yellow'
  constructor() { }

  ngOnInit(): void {
  }

  proceRequest(message:any){
    alert(" you recived a message: "+ message)

  }
}
