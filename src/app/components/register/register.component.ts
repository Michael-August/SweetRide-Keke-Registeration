import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private endpoints: EndpointsServiceService) { }

  toan: boolean = false
  tokan: boolean = false
  acotmoran: boolean = false

  organizations: any[] = []

  onboardingForm = new FormGroup({})

  ngOnInit(): void {
    this.getOrganizations()
  }

  getOrganizations() {
    this.endpoints.organizationsEndpoint().subscribe((res: any) => {
      this.organizations = res.organization
      this.organizations.forEach(org => org.selected = false)
    })
  }

  orgSelected(organization: any) {
    this.organizations.forEach(org => org.selected = false)
    let selectedOrg = this.organizations.find(org => org.name == organization.name)
    selectedOrg.selected = true
    // if(name == 'toan') {
    //   this.toan = true
    //   this.tokan = false
    //   this.acotmoran = false
    //   return;
    // }
  }

}
