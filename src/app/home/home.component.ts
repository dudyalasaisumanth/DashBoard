import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dummy=["sumanth","Deepthi","Akshara","Vaidehi","Ramesh","Naveen","Aarthi","Rakesh2"]
  constructor() { }
  manBoolean:boolean
  backBoolean:boolean=false
  ngOnInit() {
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