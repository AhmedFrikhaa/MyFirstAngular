import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/personne";
import {PremierServiceService} from "../../premier-service.service";
import {CvService} from "../cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes!: Personne[] ;
  selectedPersonne!: Personne;
  constructor(private premierService:PremierServiceService, private cvService:CvService) { }

  ngOnInit(): void {
    this.personnes=this.cvService.getPersonnes();

  }
  selectPersonne(personne :Personne){
    this.selectedPersonne = personne;
  }


}
