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
  checkBool:Boolean=true;
  admin:Boolean;
  user_mail:string[]= ["d","s"];
  user_password:number[]=[1,2];
  admin_mail:string="a";
  admin_password:string="1";
  
  constructor(private router:Router,private service:UserService) { }

  ngOnInit() {
    localStorage.removeItem("Name")
  }
  submitLoginForm(form:NgForm){
    console.log(form.value.email)
    // console.log(this.user_mail.includes(form.value.email))
    localStorage.setItem("Name",form.value.email)
    if (((form.value.email) == (this.admin_mail)) && ((form.value.password) == (this.admin_password))){
      localStorage.setItem("admin","admin")
      this.checkBool=true;
    }
    
    else if (this.user_mail.includes(form.value.email)){
      // console.log("ldm,c")
      // console.log(this.user_mail.indexOf(form.value.email))
      if(this.user_password[this.user_mail.indexOf(form.value.email)]==form.value.password){
        this.checkBool=true
        localStorage.removeItem("admin")
      }
      else{
        this.checkBool=false
      }
      
      
    }
    else{
      this.checkBool=false
    }
    // console.log(this.checkBool)
    // console.log(this.admin+"admin")
   
    this.service.setadminbool(this.admin);
    
    if(this.checkBool) 
    { 
      this.service.setuser(form.value.email)
      
      // console.log("true")
      this.router.navigate(['home']);
      }
 
    }
    
}
