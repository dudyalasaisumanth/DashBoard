import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkBool:Boolean;
  constructor(private router:Router,private service:UserService) { }

  ngOnInit() {
  }
  submitLoginForm(form:NgForm){
    console.log(form.value.email)
    if((form.value.email).endsWith("@infosys.com")) 
    { 
    if(((form.value.password).length) >= 8){
      this.service.setuser(form.value.email)
      console.log("true")
      this.router.navigate(['home']);
      }
    else{
      this.checkBool=true;
      }
    }
    else{
      this.checkBool=true;
    }
  }
}
