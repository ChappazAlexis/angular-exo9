import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars!: Array<any>;

  constructor() { 
    this.cars = [];

    this.cars.push({
      id: 0,
      brandName: 'Toyota',
      modelName: 'Prius',
      status: 'pas loué',
    });

    this.cars.push({
      id: 1,
      brandName: 'Peujeot',
      modelName: '308',
      status: 'pas loué',
    });

    this.cars.push({
      id: 3,
      brandName: 'Citroën',
      modelName: 'DS',
      status: 'pas loué',
    });

    this.cars.push({
      id: 4,
      brandName: 'Renault',
      modelName: 'Clio',
      status: 'pas loué',
    });

  }

  changeAllCarsStatus(newStatus: any) {
    this.cars.forEach(car => car.status = newStatus);
  }

  changeCarStatus(carId:any) {
    for(let i:any; i < this.cars.length; i++) {
      if (this.cars[i].id === carId) {
        this.cars[i].status = this.cars[i].status === 'louée' ? 'pas louée' : 'louée'
      }
    }
  }
}
