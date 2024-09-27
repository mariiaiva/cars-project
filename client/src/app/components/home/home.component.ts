import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { SelectedCarsService } from '../../selected.cars.service'; 
import { TopComponent } from '../top/top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, NgFor, RouterLink, LoaderComponent, NgIf, TopComponent],
  providers: [CarsService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cars: Car[] = [];

  isLoading: boolean = false;

  deletedId: string = '';

  constructor(private carsService: CarsService, private router: Router, private selectedCarsService: SelectedCarsService ) {}

  ngOnInit() {
    this.carsService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
    });
    const selectedCarsFromStorage = localStorage.getItem('selectedCars');
    if (selectedCarsFromStorage) {
      const selectedCars = JSON.parse(selectedCarsFromStorage);
      this.selectedCarsService.addToSelectedCars(selectedCars);
    }
  }

  showDetailsCar(id: string) {
    // console.log(id);

    this.router.navigate(['/auth/details-car', id])
  }

  editCar(id: string) {
    this.router.navigate(['/auth/edit-car', id])
  }
  addToFavorites(car: Car) {
    this.selectedCarsService.addToSelectedCars(car);
    localStorage.setItem('selectedCars', JSON.stringify(this.selectedCarsService.getSelectedCars()));
  }
}
