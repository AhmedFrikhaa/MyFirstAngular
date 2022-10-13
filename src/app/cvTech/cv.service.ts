import { Injectable } from '@angular/core';
import {Personne} from "../model/personne";

@Injectable({
  providedIn: 'root'
})
export class CvService {
 private personnes!: Personne[];


  constructor() {
    this.personnes=[
    new Personne(1,"Frikha","Ahmed",21,"ahmed.jpg",11126048,"Student"),
    new Personne(2,"Gazzah","Achraf",21,"achraf.jpg",12874202,"Student"),
    new Personne(3,"Ati","Youssef",20,"ati.jpg",3000000,"Student"),
    new Personne(4,"Glili","Ahmed",21,"gliw.jpg",320000,"Student"),
    new Personne(5,"aymen","bouhaha",20,"",323422,"Student"),
  ];
  }
  getPersonnes() :Personne[]{
    return this.personnes ;
  }

}

