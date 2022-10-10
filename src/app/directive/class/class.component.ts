import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  est=false;
  milan=false;
  barca=false;
  show=true;
  teams=['css','arsenal','lorient','roma','real','ajax'];
  constructor() { }

  ngOnInit(): void {
  }
  changeTeam(team:string){
    switch (team){
      case 'barca':
        this.barca=true;
        this.milan=false;
        this.est=false;
        break;
      case 'est':
        this.est=true;
        this.milan=false;
        this.barca=false;

        break;
      case 'milan':
        this.milan=true;
        this.barca=false;
        this.est=false;
        break;

    }

  }

}
