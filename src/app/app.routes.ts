import { Routes } from '@angular/router';
import { ProjetInactif } from './projet-inactif/projet-inactif';
import { ProjetActif } from './projet-actif/projet-actif';
import { VoirLesProjet } from './voir-les-projet/voir-les-projet';

export const routes: Routes = [
    {path: 'projetInactif', component: ProjetInactif},
    {path: 'projetActif', component: ProjetActif},
     {path: 'projets', component: VoirLesProjet}
];
