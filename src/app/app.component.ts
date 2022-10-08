import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Achraf ';
  bgColor="red";
  show=false ;
  changeSatate(){
    this.show=!this.show;
  }
}
