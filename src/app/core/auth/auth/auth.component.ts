import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsServiceService } from '../../services/endpoints/endpoints-service.service';
import { ModalService } from '../../services/modal-service/modal.service';
import { NotificationService, ToasterType } from '../../services/notification/notification-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router, private modalService: ModalService, private endpoints: EndpointsServiceService,
    private alertService: NotificationService) { }

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  isLoading: boolean = false

  ngOnInit(): void {
  }

  get email() {
    return this.authForm.controls['email']
  }

  get password() {
    return this.authForm.controls['password']
  }

  login() {
    this.isLoading = true

    this.endpoints.logInEndpoint(this.authForm.value).subscribe((res: any) => {
      if (res.status == true) {
        localStorage.setItem('kekeToken', res.token)
        let user = JSON.stringify(res.user)
        localStorage.setItem('User', user)
        this.endpoints.isLoggedIn = true
        this.router.navigateByUrl('/home')
      }
    }, err => {
      console.log(err)
      if (err.status == 0) {
        this.alertService.popUpAlert('Error', 'Check your internet connection', 'error', false, 'OK', '#1AD364', undefined)
        return
      }

      if (err.status == 422) {
        this.alertService.popUpAlert('Error', `${err.error.message}`, 'error', false, 'OK', '#1AD364', undefined)
      }
    }).add(() => this.isLoading = false)
  }

}
