import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';

import { environment } from '../../../environments/environment.prod'

@Component({
  selector: 'app-single-keke',
  templateUrl: './single-keke.component.html',
  styleUrls: ['./single-keke.component.css']
})
export class SingleKekeComponent implements OnInit {

  base_url = ''
  driverAvatar = ''
  guarantorAvatar = ''

  constructor(private activatedRoute: ActivatedRoute, private endpoint: EndpointsServiceService) {
    this.base_url = environment.avatar_URL
   }

  kekeId: any
  foundKeke: any
  isLoading: boolean = false

  ngOnInit(): void {
    this.kekeId = this.activatedRoute.snapshot.paramMap.get('id')

    this.getSingleKeke(this.kekeId)
  }

  getSingleKeke(id: string) {
    this.isLoading = true

    this.endpoint.getMember(id).subscribe((res: any) => {
      console.log(res)
      this.foundKeke = res.data
      this.driverAvatar = `${this.base_url}/${this.foundKeke.avatar.url}`
      this.guarantorAvatar = `${this.base_url}/${this.foundKeke.guarantor.avatar.url}`

      console.log(this.driverAvatar)
      console.log(this.guarantorAvatar)
    })
  }
  
}
