import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../models/car';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { visibility } from '../../animations/visibility';

@Component({
  selector: 'app-details-car',
  standalone: true,
  providers: [CarsService],
  imports: [HttpClientModule],
  animations: [visibility],
  templateUrl: './details-car.component.html',
  styleUrl: './details-car.component.css',
})
export class DetailsCarComponent {

  car: Car = new Car('', '', 0, '') 

  constructor(
    private activatedRoute: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    // console.log(id)

    this.carsService.getCarById(id).subscribe((car: Car) => {
      this.car = car
    })
  }

  goBack() {
    this.location.back()
  }


}
