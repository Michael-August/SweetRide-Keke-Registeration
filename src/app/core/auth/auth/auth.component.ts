import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  ngOnInit(): void {
  }

  get email() {
    return this.authForm.controls['email']
  }

  get password() {
    return this.authForm.controls['password']
  }

  login() {
    let userdetails = JSON.stringify(this.authForm.value)
    localStorage.setItem('User', userdetails)
    this.router.navigateByUrl('/home')
  }

}
