import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { UtilsService } from 'src/app/core/services/modal-service/utils-service/utils.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private util: UtilsService, private route: Router, private modalService: ModalService) { }

  user: any

  ngOnInit(): void {
    this.user = this.util.getLoggedInUser()
  }

  goToReg() {
    this.modalService.openModal = true
  }

}
