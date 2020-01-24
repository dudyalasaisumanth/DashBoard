import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dummy=["sumanth","Deepthi","Akshara","Vaidehi","Ramesh","Naveen","Aarthi","Rakesh2"]
  constructor(private service:UserService) {
    this.userName=this.service.getUser();
    console.log(this.userName)
   }
  manBoolean:boolean;
  adminBool:boolean
  backBoolean:boolean=false
  userName:string
  ngOnInit() {
    console.log(localStorage.getItem("Name"))
    if(localStorage.getItem("admin")=="admin"){
      this.adminBool=true
    }
    // this.adminBool=this.service.getAdminBool()
  }
  managerMethod(){
    this.manBoolean=true;
    this.backBoolean=false
  }
  backgroundMethod(){
    this.backBoolean=true
    this.manBoolean=false
  }
  searching(name){
    console.log("name")
  }
}