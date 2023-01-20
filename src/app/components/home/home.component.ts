import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { NotificationService } from 'src/app/core/services/notification/notification-service.service';
import { UtilsService } from 'src/app/core/services/utils-service/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modalService: ModalService, private util: UtilsService,
    private route: Router, private endpoints: EndpointsServiceService, private alertService: NotificationService) { }

  isLoading: boolean = false
  user: any
  keke: any
  searchForm = new FormGroup({
    search: new FormControl('')
  })

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

  searchKeke() {
    this.isLoading = true
    if (this.searchForm.value['search'] == '') {
      this.alertService.popUpAlert('Warning', 'Make sure to type a green number', 'info', false, 'OK', '#1AD364', undefined)
      return
    } 
    this.endpoints.searchEndpoint(this.searchForm.value).subscribe((res: any) => {
      if(res.status == true) {
        let results = res['Search results']
        this.keke = results[0]
      }
      
    }).add(() => this.isLoading = false)
  }

}

