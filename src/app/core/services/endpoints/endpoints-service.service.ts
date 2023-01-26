import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { environment } from '../../../../environments/environment'
import { environment } from '../../../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class EndpointsServiceService {

  BASE_URL = environment.BASE_URL
  
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor( private  http: HttpClient) { }

  logInEndpoint(payload: any) {
    return this.http.post(`${this.BASE_URL}/login`, payload)
  }

  searchEndpoint(payload: any) {
    return this.http.post(`${this.BASE_URL}/search`, payload)
  }

  organizationsEndpoint() {
    return this.http.get(`${this.BASE_URL}/organizations`)
  }

  onboardingEndpoint(payload: any) {
    return this.http.post(`${this.BASE_URL}/form`, payload)
  }

  showKeke(kekeId: string) {
    return this.http.get(`${this.BASE_URL}/${kekeId}`)
  }
}
