import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { UtilsService } from 'src/app/core/services/utils-service/utils.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private modalService: ModalService, private route: Router, private endpoints: EndpointsServiceService) { 
    
  }

  user: any

  ngOnInit(): void {
    console.log(this.endpoints.isLoggedIn)
  }

  goToRegister() {
    console.log(this.user)
    if (this.user == null) {
      console.log(this.user)
      alert('Please login first')
      this.route.navigateByUrl('/login')
    } else {
      this.modalService.openModal = true
    }
  }

}
