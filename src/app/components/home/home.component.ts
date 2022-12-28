import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { UtilsService } from 'src/app/core/services/modal-service/utils-service/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modalService: ModalService, private util: UtilsService,
    private route: Router) { }

  isLoading: boolean = false
  user: any
  keke:any
  search = new FormGroup({
    plate_number: new FormControl('')
  })

  ngOnInit(): void {
    this.user = this.util.getLoggedInUser()
  }

  goToRegister() {
    if (this.user == null){
      console.log(this.user)
      alert('Please login first')
      this.route.navigateByUrl('/login')
    } else {
      this.modalService.openModal = true
    }
  }

  searchKeke() {
    if(this.keke !== null) {
      alert('You can regster this driver!')
      this.route.navigateByUrl('/register')
      return
    }
    if (this.keke == null) {
      this.keke = this.util.getSearchedKeke()
      alert('Driver already registered!')
      return
    }
  }

  registerUser() {
    this.route.navigateByUrl('/register')
    this.modalService.openModal = false
  }

}
