import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Car } from '../../models/car';

@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgIf, HttpClientModule],
  providers: [CarsService],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css',
})
export class EditCarComponent {


  id: string = ''

  editCarForm!: FormGroup

  constructor(
    private carService: CarsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    // get one car by id
    this.carService.getCarById(this.id).subscribe((car: Car) => {
      this.editCarForm = new FormGroup({
        name: new FormControl(car.name, Validators.required),
        model: new FormControl(car.model, Validators.required),
        price: new FormControl(car.price, Validators.required),
        image: new FormControl(car.image, Validators.required),
      });
    })


  }

  submit() {
    if (this.editCarForm.valid) {
      const { name, model, price, image } = this.editCarForm.value;

      const car = new Car(name, model, price, image);

      this.carService.editCar(car, this.id).subscribe(() => {
        this.router.navigate(['/auth/maintenance'])
      })

    }
  }
}