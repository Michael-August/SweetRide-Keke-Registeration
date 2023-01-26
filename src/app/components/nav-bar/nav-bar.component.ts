import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { NotificationService } from 'src/app/core/services/notification/notification-service.service';
import { UtilsService } from 'src/app/core/services/utils-service/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  constructor(private util: UtilsService, private route: Router, private modalService: ModalService,
    private alertService: NotificationService, private endpoints: EndpointsServiceService) { }

  user: any
  loggedIn: any

  ngOnInit(): void {
    this.user = localStorage.getItem('User')
    this.endpoints.isLoggedIn$.asObservable().subscribe(res => this.loggedIn = res)
    console.log(this.loggedIn)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  goToReg() {
    if (this.user == null) {
      this.alertService.popUpAlert('Error', `You must be logged in to Register Keke`, 'error', false, 'OK', '#1AD364', undefined)
      this.route.navigateByUrl('/login')
    } else {
      this.modalService.openModal = true
    }
  }
  
  logout() {
    localStorage.clear()
    this.endpoints.isLoggedIn$.next(false)
    this.route.navigateByUrl('/login')
  }

}
