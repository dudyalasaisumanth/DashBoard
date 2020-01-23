import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name:string
  adminBool:boolean
  constructor() { }
  setuser(name){
    this.name=name;
    console.log(this.name)
  }
  getUser(){
    console.log(this.name)
    return this.name;
  }
  setadminbool(bool){
    this.adminBool=bool;
  }
  getAdminBool(){
    return this.adminBool;
  }
  
}
