import { Injectable } from '@angular/core';
import {Personne} from "../model/personne";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  personnes!:Personne[];
  constructor() {
    this.personnes=[];
  }
  getEmbachees(){
    return this.personnes;
}
  embaucher(personne:Personne):void{
    const index = this.personnes.indexOf(personne);
    if(index<0)
       this.personnes.push(personne);
    else
      alert(`${personne.name} est deja sélecetionné`);

  }
  debaucher(personne:Personne):void{
    const index = this.personnes.indexOf(personne);
    if (index>=0)
      this.personnes.splice(index,1);

  }
}

