import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {
public forecasts: Array<any> | undefined

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getDataForcast().subscribe(result => {
      this.forecasts = result.list;
      console.log(result);
    });
  }

  formatDate(string: any) {
    const date = new Date(string * 1000);

    const options: Intl.DateTimeFormatOptions = {
      day : 'numeric',
      month: 'short',
      hour: '2-digit',
      hour12: true

    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
  }
}
