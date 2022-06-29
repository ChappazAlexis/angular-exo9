import { Component } from '@angular/core';
import { CarService } from './services/car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cars: any[];

  constructor(private carService: CarService) {

    this.cars = this.carService.cars
  }

  onClickChangeAllCarsStatus(newStatus:any) {
    this.carService.changeAllCarsStatus(newStatus);
  }
}
