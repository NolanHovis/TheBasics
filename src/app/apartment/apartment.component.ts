import { Component } from "@angular/core";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
  styles: [`.available { color: white}`]
})

export class ApartmentComponent {

  apartmentNumber = [
    2313,
    7565,
    9380,
    6498
  ]
  apartmentNumberSelector = Math.floor(Math.random() * 4)
  apartmentStatus = 'unavailable'

  constructor() {
    this.apartmentStatus = Math.random() > 0.5 ? 'available' : 'unavailable';
  }

  getApartmentStatus() {
    return this.apartmentStatus
  }

  getColor() {
    return this.apartmentStatus === 'available' ? '#8FBC8F' : '#CD5C5C'
  }

}
