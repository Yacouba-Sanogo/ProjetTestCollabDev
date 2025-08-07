import { Routes } from '@angular/router';
import { ProjetInactif } from './projet-inactif/projet-inactif';
import { ProjetActif } from './projet-actif/projet-actif';
import { VoirLesProjet } from './voir-les-projet/voir-les-projet';
import { LandingPage } from './landing-page/landing-page';
import { CategoryCard } from './category-card/category-card';

export const routes: Routes = [
    {path: 'projetInactif', component: ProjetInactif},
    {path: 'projetActif', component: ProjetActif},
     {path: 'projets', component: VoirLesProjet},
      {path: 'projet', component: LandingPage},
      {path: 'projetss', component: CategoryCard},
];
 