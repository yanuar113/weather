import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule],
})
export class Tab3Page {
  public favorites: any[];
  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')|| '[]');
    console.log(this.favorites);
  }
}
