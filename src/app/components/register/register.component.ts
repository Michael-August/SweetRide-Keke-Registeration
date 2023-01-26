import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';
import { NotificationService } from 'src/app/core/services/notification/notification-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private endpoints: EndpointsServiceService, private alertService: NotificationService, private router: Router) { }

  organizations: any
  organizationId!: string
  avatar: any
  guarantorAvatar: any
  maxImageErrorMessage!: string

  onboardingForm = new FormGroup({
    avatar: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    ward: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    lga: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required),
    green_number: new FormControl('', Validators.required),
    nin: new FormControl('', Validators.required),
    reg_number: new FormControl('', Validators.required),
    id_number: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    organization: new FormControl('', Validators.required),
    guarantor_avatar: new FormControl('', Validators.required),
    guarantor_name: new FormControl('', Validators.required),
    guarantor_address: new FormControl('', Validators.required),
    guarantor_phone: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.getOrganizations()
  }

  getOrganizations() {
    this.endpoints.organizationsEndpoint().subscribe((res: any) => {
      this.organizations = res.organization
      this.organizations.forEach((org: any) => org.selected = false)
    })
  }

  processAvatarUpload(event: any, fieldName: string) {
    if(fieldName == 'avatar') {
      this.avatar = event.target.files[0]
      console.log(this.avatar)
      return
    }

    if (fieldName == 'guarantorAvatar') {
      this.guarantorAvatar = event.target.files[0]
      console.log(this.guarantorAvatar)
      return
    }
  }

  orgSelected(organization: any) {
    this.organizations.forEach((org: any) => org.selected = false)
    let selectedOrg = this.organizations.find((org: any) => org.name == organization.name)
    selectedOrg.selected = true
    this.organizationId = selectedOrg.id
  }

  submit() {
    const formData = new FormData()

    formData.append('avatar', this.avatar)
    formData.append('guarantor_avatar', this.guarantorAvatar)
    formData.append('name', this.onboardingForm.controls['name'].value)
    formData.append('ward', this.onboardingForm.controls['ward'].value)
    formData.append('town', this.onboardingForm.controls['town'].value)
    formData.append('lga', this.onboardingForm.controls['lga'].value)
    formData.append('address', this.onboardingForm.controls['address'].value)
    formData.append('dob', this.onboardingForm.controls['dob'].value)
    formData.append('unit', this.onboardingForm.controls['unit'].value)
    formData.append('green_number', this.onboardingForm.controls['green_number'].value)
    formData.append('nin', this.onboardingForm.controls['nin'].value)
    formData.append('reg_number', this.onboardingForm.controls['reg_number'].value)
    formData.append('id_number', this.onboardingForm.controls['id_number'].value)
    formData.append('phone', this.onboardingForm.controls['phone'].value)
    formData.append('organization', this.organizationId)
    formData.append('guarantor_name', this.onboardingForm.controls['guarantor_name'].value)
    formData.append('guarantor_address', this.onboardingForm.controls['guarantor_address'].value)
    formData.append('guarantor_phone', this.onboardingForm.controls['guarantor_phone'].value)

    this.endpoints.onboardingEndpoint(formData).subscribe((res: any) => {
      if(res.status == true) {
        this.alertService.popUpAlert('Success', `${res.message}`, 'success', false, 'OK', '', undefined)
        this.router.navigateByUrl('/')
      }
    }, err => {
      if(err) {
        this.alertService.popUpAlert('Error', `${err.error.message}`, 'error', false, 'OK', '', undefined)
      }
    })
  }

}
