import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  toan: boolean = false
  tokan: boolean = false
  acotmoran: boolean = false

  ngOnInit(): void {
  }

  orgSelected(name: string) {
    if(name == 'toan') {
      this.toan = true
      this.tokan = false
      this.acotmoran = false
      return;
    }

    if (name == 'tokan') {
      this.tokan = true
      this.toan = false
      this.acotmoran = false
      return;
    }

    if (name == 'acotmoran') {
      this.tokan = false
      this.toan = false
      this.acotmoran = true
      return;
    }
  }

}
