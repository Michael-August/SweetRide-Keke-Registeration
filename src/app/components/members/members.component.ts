import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';
import { ModalService } from 'src/app/core/services/modal-service/modal.service';
import { AlertType, NotificationService } from 'src/app/core/services/notification/notification-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public modalService: ModalService, private endpointsSrv: EndpointsServiceService, 
    private route: Router, private alertService: NotificationService) { }

  isLoading: boolean = false
  members: any[] = []

  ngOnInit(): void {
    this.getMembers()
  }

  getMembers() {
    this.isLoading = true
    this.endpointsSrv.getMembers().subscribe((res: any) => {
      this.members = res.data
    }).add(() => this.isLoading = false)
  }

  showSingleMember(memberId: string) {
    this.route.navigateByUrl(`/member/${memberId}`)
  }

  editMember(memberId: any) {

  }

  deleteMember(member: any) {
    (this.alertService.popUpAlert('Deleting', `Are you sure you want to delete ${member.name}?`,
      AlertType.Confirm, true, 'Delete') as Promise<any>).then((arg) => {
        if (arg.value) {
          
        }
      }
    );
  }

}