import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {

  weather: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params['special']) {
        this.weather = JSON.parse(params['special']);
      }
    })
  }
  ngOnInit(): void {}
  
  save() {
   const storage = localStorage.getItem('favorites');
   let favorites = [];

   if (storage){
    favorites =JSON.parse(storage);
   }

   favorites.push(this.weather);
   localStorage.setItem('favorites',JSON.stringify(favorites));
  }

}
