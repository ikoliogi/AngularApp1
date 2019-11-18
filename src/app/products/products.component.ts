import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/IProduct'; // den vazoume thn katalhksh .ts sto import

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: IProduct[] = [
    {
      id: 1,
      name: 'Core i3',
      price: 300,
      sale: 250,
      photo: 'assets/images/img.jpg'
    },
    {
      id: 2,
      name: 'Core i5',
      price: 500,
      sale: null,
      photo: 'assets/images/img.jpg'
    },
    {
      id: 3,
      name: 'Core i7',
      price: 700,
      sale: null,
      photo: 'assets/images/img.jpg'
    },{
      id: 4,
      name: 'Core i9',
      price: 900,
      sale: 850,
      photo: 'assets/images/img.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
