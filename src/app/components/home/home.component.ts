import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modalService: ModalService, private route: Router) { }

  isLoading: boolean = false

  ngOnInit(): void {
  }

  goToRegister() {
    this.route.navigateByUrl('/register')
    this.modalService.openModal = false
  }

}
