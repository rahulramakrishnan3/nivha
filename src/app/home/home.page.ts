import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonButton
 } from '@ionic/angular/standalone';
import { GenericHeaderComponent } from "../components/generic-header/generic-header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, GenericHeaderComponent, IonMenu, IonMenuButton, IonButtons, 
    CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  ],
})
export class HomePage {
  constructor() {}
  public genericHeader = {
    label: 'Nivha',
    backButton: false,
    profile: true,
    cart: true
  }
  public cards = [
    {
      "id": 1,
      "image": "https://via.placeholder.com/150",
      "label": "Stylish T-Shirt",
      "price": 299
    },
    {
      "id": 2,
      "image": "https://via.placeholder.com/150",
      "label": "Casual Shirt",
      "price": 499
    },
    {
      "id": 3,
      "image": "https://via.placeholder.com/150",
      "label": "Denim Jeans",
      "price": 899
    }
  ]
  
}
