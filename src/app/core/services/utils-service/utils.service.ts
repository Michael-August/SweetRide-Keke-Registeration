import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  user: any
  keke = {
  }

  getSearchedKeke() {
    return this.keke
  }

  getLoggedInUser() {
    return this.user = localStorage.getItem('User')
  }
}
