import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name:boolean
  constructor() { }
  setuser(name){
    this.name=true;
    console.log(this.name)
  }
  getUser(){
    console.log(this.name)
    return this.name;
  }
}
