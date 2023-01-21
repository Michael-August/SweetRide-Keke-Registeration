import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { NotificationService } from 'src/app/core/services/notification/notification-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private modalService: ModalService, private route: Router, 
    private endpoints: EndpointsServiceService, private alertService: NotificationService) { 
    
  }

  user: any

  ngOnInit(): void {
    this.user = localStorage.getItem('User')
  }

  goToRegister() {
    if (this.user == null) {
      this.alertService.popUpAlert('Error', `You must be logged in to Register Keke`, 'error', false, 'OK', '#1AD364', undefined)
      this.route.navigateByUrl('/login')
    } else {
      this.modalService.openModal = true
    }
  }

}
