import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-generic-header',
  templateUrl: './generic-header.component.html',
  styleUrls: ['./generic-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, CommonModule, IonIcon, IonButton],
})
export class GenericHeaderComponent  implements OnInit {
  @Input() header: any;

  constructor() {
    addIcons({ cartOutline, personOutline });
   }

  ngOnInit() {}

  getProfile(){
    console.log('profile')
  }

  getCart(){
    console.log('cart')
  }

}
