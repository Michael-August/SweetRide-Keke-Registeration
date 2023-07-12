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
    return this.http.post(`${this.BASE_URL}/query`, payload)
  }

  organizationsEndpoint() {
    return this.http.get(`${this.BASE_URL}/organizations`)
  }

  onboardingEndpoint(payload: any) {
    return this.http.post(`${this.BASE_URL}/create/member`, payload)
  }

  editMember(memberId: any, payload: any) {
    return this.http.post(`${this.BASE_URL}/edit/${memberId}`, payload)
  }

  getMembers() {
    return this.http.get(`${this.BASE_URL}/members/all`)
  }

  getMember(memberId: string) {
    return this.http.get(`${this.BASE_URL}/${memberId}`)
  }

  getStates() {
    return this.http.get(`${this.BASE_URL}/states`)
  }

  getCities(stateId: any) {
    return this.http.get(`${this.BASE_URL}/${stateId}/cities`)
  }

  deleteMember(memberId: any) {
    return this.http.delete(`${this.BASE_URL}/delete/${memberId}`)
  }
}
