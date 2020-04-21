import { Component, OnInit } from '@angular/core';
import { ICar } from './car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
title: string = 'Car List';
imageWidth: number = 100;
imageMargin: number = 2;
showImage: boolean = false;
listFilter: string = 'mazda';
cars: ICar[] = [
   {
"carId": 1,
"carName": 'Mazda cx-3',
"carCode": 'CAR-0011',
"releaseDate": 'March 19, 2019',
"description": 'amazing car from mazda',
"price" : 30000,
"starRating": 4.2,
"imageUrl": 'assets/images/mazdacx3.jpg'
   },
   {
  "carId": 2,
   "carName" : 'Toyota RAV4' ,
   "carCode" : 'CAR-0023',
   "releaseDate" : 'March 18, 2019' ,
   "description" : 'rav4' ,
   "price" : 35000 ,
  'starRating': 4.2 ,
   "imageUrl" : 'assets/images/rav4.jpg'
   },
];

toggleImage(): void {
   this.showImage = !this.showImage;
}
   constructor() { }
   ngOnInit(): void {
   }
}
