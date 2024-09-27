import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { SelectedCarsService } from '../../selected.cars.service'; 
import { HomeComponent } from '../home/home.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [HomeComponent, NgFor],
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  selectedCars: Car[] = [];

  constructor(private selectedCarsService: SelectedCarsService) {}

  ngOnInit() {
    this.selectedCars = this.selectedCarsService.getSelectedCars();
    this.selectedCarsService.selectedCars$.subscribe((selectedCars) => {
      this.selectedCars = selectedCars;
    });
  }
}