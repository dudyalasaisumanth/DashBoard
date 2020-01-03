import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkBool:Boolean;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submitLoginForm(form:NgForm){
    console.log(form.value.email)
    if((form.value.email).endsWith("@infosys.com")){
      console.log("true")
      this.router.navigate(['home']);
    }
    else{
      this.checkBool=true;
    }
  }
}
