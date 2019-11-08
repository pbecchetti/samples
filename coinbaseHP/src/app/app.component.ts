import { Component,HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';

export interface PeriodicElement {
  name: string;
  acr: string;
  position: number;
  chart: string;
  price: number;
  change:number;
  trade:string;
  imageUrl:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bitcoin', acr:'BTC', price: 8037.10, change: -0.87, chart: './assets/img/chart1.png', trade:'', imageUrl:'./assets/img/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png'},
  {position: 2, name: 'Ethereum', acr:'ETH', price: 169.90, change: 1.08, chart: './assets/img/chart2.png', trade:'', imageUrl:'./assets/img/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png'},
  {position: 3, name: 'Bitcoin Cash', acr:'BCH', price: 209.88, change: -0.49, chart: './assets/img/chart3.png', trade:'', imageUrl:'./assets/img/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b 2.png'},
  {position: 4, name: 'Litecoin', acr:'LTC', price: 56.66, change: 2.77, chart: './assets/img/chart4.png', trade:'', imageUrl:'./assets/img/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class AppComponent {
  title = 'coinbaseHP';
  displayedColumns: string[] = ['position', 'name','price','change','chart','trade'];
  dataSource = ELEMENT_DATA;
  logo = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 300) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
       this.logo=1
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
        this.logo=0
     }
  }
}
