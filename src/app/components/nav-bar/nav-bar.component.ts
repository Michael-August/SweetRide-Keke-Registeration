import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { NotificationService } from 'src/app/core/services/notification/notification-service.service';
import { UtilsService } from 'src/app/core/services/utils-service/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private util: UtilsService, private route: Router, private modalService: ModalService,
    private alertService: NotificationService) { }

  user: any

  ngOnInit(): void {
    this.user = localStorage.getItem('User')
  }

  goToReg() {
    if (this.user == null) {
      this.alertService.popUpAlert('Error', `You must be logged in to Register Keke`, 'error', false, 'OK', '#1AD364', undefined)
      this.route.navigateByUrl('/login')
    } else {
      this.modalService.openModal = true
    }
  }

}
