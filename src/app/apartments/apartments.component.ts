import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  allowNewApartment = false
  apartmentCreationStatus = 'Apartment not created!'
  apartmentName = 'Random apartment'
  apartmentCreated = false
  apartments = [
    'Hilltop',
    'Icon',
    'Camden',
    'Liberty'
  ]

  constructor() {
    setTimeout(() => {this.allowNewApartment = true}, 3000)

  }

  ngOnInit(): void {
  }

  onCreateApartment() {
    this.apartmentCreated = true
    this.apartmentCreationStatus = this.apartmentName + ' was created!'
  }

  // onUpdateName(event: any) {
  //   this.apartmentName = (<HTMLInputElement>event.target).value
  // }

}
