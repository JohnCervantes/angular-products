import { Component } from '@angular/core';
import productsJson from '../shared/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-products';
  products = [...productsJson];
  featuredProduct = productsJson[0];
  productHover = 0;
  hover = false;

  constructor() {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].date = new Date(this.products[i].date)
        .toString()
        .slice(0, 10);
    }
  }

  setFeaturedProduct(index: number) {
    this.featuredProduct = this.products[index];
  }

  onMouseEnter(index: number) {
    this.productHover = index;
    console.log(index);
  }
}
