import { Component, OnInit } from '@angular/core';
import { User } from './../User';
import {AuthService} from '../auth.service';
import {SignupServiceServices} from '../signupservice.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
private title = 'App';
//Property for the gender
  private gender: string[];
  //Property for the user
  private user:User;
  constructor(private signupserv: AuthService) { }

  ngOnInit() {
 this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({
        email:"sushrutd16@gmail.com", password: { pwd: "" , confirm_pwd: ""}, 
        gender: this.gender[0], terms: false}); }
public onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
        this.user = value;
        this.signupserv.postData(this.user);
        console.log( this.user);
        console.log("valid: " + valid);
    }
   
  }


