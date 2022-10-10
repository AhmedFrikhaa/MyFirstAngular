import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../../model/personne";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() personnes!:Personne[];
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(selectedPersonne : Personne){
    this.selectedPersonne.emit(selectedPersonne);
  }

}
