import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from "./landing-page/landing-page";
import { CategoryCard } from "./category-card/category-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, CategoryCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('collabDev');
  onFavoriToggled(isFavori: boolean) {
    console.log('Favori toggled:', isFavori);
  }

  onCloseClicked() {
    console.log('Card closed');
    // Logique pour fermer la carte
  }
}
