import { Component } from '@angular/core';
import { ProjetInactif } from '../projet-inactif/projet-inactif';
import { ProjetActif } from "../projet-actif/projet-actif";

@Component({
  selector: 'app-voir-les-projet',
  imports: [ProjetInactif, ProjetActif],
  templateUrl: './voir-les-projet.html',
  styleUrl: './voir-les-projet.css'
})
export class VoirLesProjet {

}
