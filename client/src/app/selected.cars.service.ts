import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from './models/car';

@Injectable({
  providedIn: 'root',
})
export class SelectedCarsService {
  private selectedCarsSubject = new BehaviorSubject<Car[]>([]);
  selectedCars$ = this.selectedCarsSubject.asObservable();

  addToSelectedCars(car: Car) {
    const currentSelectedCars = this.selectedCarsSubject.value;
    if (!currentSelectedCars.find((selectedCar) => selectedCar._id === car._id)) {
      this.selectedCarsSubject.next([...currentSelectedCars, car]);
    }
  }

  getSelectedCars(): Car[] {
    return this.selectedCarsSubject.value;
  }
}
