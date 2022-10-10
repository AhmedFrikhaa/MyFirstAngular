import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  @Input() childProperty:any;
  @Output() sendRequestToData= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  console.log(this.childProperty);
  }
  sendEvent(){
    this.sendRequestToData.emit('data to parent ')
  }

}
