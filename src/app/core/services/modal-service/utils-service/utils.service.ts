import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  user: any
  keke = {
    id: 'c3rhe63ujej',
    name: 'Abdul Ibrahim',
    email: 'abdulibrahim@gmail.com',
    phone: '09087654321',
    plate_number: 'AGSHy57'
  }

  getSearchedKeke() {
    return this.keke
  }

  getLoggedInUser() {
    return this.user = localStorage.getItem('User')
  }
}
