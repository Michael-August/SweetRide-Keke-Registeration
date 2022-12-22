import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  isLoading: boolean = false

  ngOnInit(): void {
  }

}
