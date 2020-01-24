import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  name:string
  constructor(){

  }
  ngDoCheck(){
    // console.log("sumanh")
    this.name=localStorage.getItem("Name")
    // console.log("app "+this.name)
  }
}
