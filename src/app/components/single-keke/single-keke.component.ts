import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointsServiceService } from 'src/app/core/services/endpoints/endpoints-service.service';

@Component({
  selector: 'app-single-keke',
  templateUrl: './single-keke.component.html',
  styleUrls: ['./single-keke.component.css']
})
export class SingleKekeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private endpoint: EndpointsServiceService) { }

  kekeId: any
  foundKeke: any
  isLoading: boolean = false

  ngOnInit(): void {
    this.kekeId = this.activatedRoute.snapshot.paramMap.get('id')

    this.getSingleKeke(this.kekeId)
  }

  getSingleKeke(id: string) {
    this.isLoading = true

    this.endpoint.showKeke(id).subscribe((res: any) => {
      console.log(res)
      this.foundKeke = res.Keke
    })
  }

  // address
  //   :
  //   "sdfbdsjfs"
  // avatar
  //   :
  //   null
  // dob
  //   :
  //   "djfdsjfsdf"
  // green_number
  //   :
  //   "3232329"
  // guarantor
  //   :
  //   null
  // id
  //   :
  //   "9d1fee3f-d80c-48bf-9598-30bc32598e41"
  // id_number
  //   :
  //   "kdskjskdskdsjd"
  // lga
  //   :
  //   "ksdfjkhdks"
  // name
  //   :
  //   "hdjshfd"
  // nin
  //   :
  //   "kdsjhfdskf"
  // organization
  //   :
  //   { id: "5ba843ca-5d70-479b-980a-bf17c33de4ae", name: "NACTOMORAS", created_at: null, updated_at: null }
  // phone
  //   :
  //   "0487464644"
  // reg_number
  //   :
  //   "kjdsjdkskd"
  // town
  //   :
  //   "dkfsdkf"
  // unit
  //   :
  //   "kdhk"
  // user
  //   :
  //   { id: "cf5abc38-99a9-4c09-940d-ddef3237cd18", name: "Usman Gunu", email: "info@sweetride.ng",… }
  // ward
  //   :
  //   "sdjkfhsdkfj"
  

}
