import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  toan: boolean = false
  oan: boolean = false
  koan: boolean = false

  ngOnInit(): void {
  }

  orgSelected(name: string) {
    if(name == 'toan') {
      this.toan = true
      this.oan = false
      this.koan = false
      return;
    }

    if (name == 'oan') {
      this.oan = true
      this.toan = false
      this.koan = false
      return;
    }

    if (name == 'koan') {
      this.koan = true
      this.toan = false
      this.oan = false
      return;
    }
  }

}
