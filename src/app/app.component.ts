import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private title: Title, @Inject(DOCUMENT) document: any) {
    title.setTitle('Register | SweetRide Keke')
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (window.pageYOffset > 50) {
      let element: any = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element: any = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
}
