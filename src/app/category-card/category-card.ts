import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-card',
  // imports: [RouterLink],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css'
})

export class CategoryCard {@Input() title: string = 'ALP';
  @Input() subtitle: string = 'Par Fatoumata Diawara, Application de suivi de santé  ';
  @Input() level: string = 'butant'; // Nouveau : Niveau (Débutant, Intermédiaire, etc.)
  @Input() levelColor: string = '#28a745'; // Nouveau : Couleur du niveau (vert par défaut)
  @Input() mainButtonText: string = 'E-Comerce';
  @Input() mainButtonColor: string = '#F75C9C'; // Couleur par défaut (orange)
  @Input() collaborators: number = 10; // Nouveau : Nombre de collaborateurs
  @Input() status: string = 'En cours'; // Nouveau : Statut (En cours, Terminé, etc.)
  @Input() statusS: string = 'Voir Collaborateur';
  @Input() statusColor: string = '#6c757d'; // Nouveau : Couleur du statut
  @Input() isFavori: boolean = false;
  @Input() duration: string = 'Il y a 3 jours'; // Nouveau : Durée (Il y a 3 jours)
  @Input() showClose: boolean = false; // Nouveau : Afficher le bouton Fermer

  @Output() favoriToggled = new EventEmitter<boolean>();
  @Output() closeClicked = new EventEmitter<void>(); // Nouveau : Événement pour fermer

  toggleFavori() {
    this.isFavori = !this.isFavori;
    this.favoriToggled.emit(this.isFavori);
  }

  onClose() {
    this.closeClicked.emit();
  }
}
  

