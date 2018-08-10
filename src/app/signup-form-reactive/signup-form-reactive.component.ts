import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { User } from './../User';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup-form-reactive',
  templateUrl: './signup-form-reactive.component.html',
  styleUrls: ['./signup-form-reactive.component.css']
})
export class SignupFormReactiveComponent implements OnInit {

private title = 'App';
  genderList: String[];
    signupForm: FormGroup;
  private user:User;
constructor(private fb:FormBuilder,private register: AuthService){
}

   ngOnInit() {
 
    this.genderList =  ['Male', 'Female', 'Others'];
 
        this.signupForm  = this.fb.group({
            email: ['',[Validators.required,
                        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: this.fb.group({
                pwd: ['', [Validators.required, 
                           Validators.minLength(8)]],
                confirmPwd: ['', [Validators.required,
                                  Validators.minLength(8)]]
            }),
            gender: ['', Validators.required],
            terms: []
        })   
   }

 get email() { return this.signupForm.get('email'); }
     
    get password() { return this.signupForm.get('password'); }
 
    get gender() { return this.signupForm.get('gender'); }
 
    get terms() { return this.signupForm.get('terms'); }

public onFormSubmit() {
        if(this.signupForm.invalid) {
            this.user = this.signupForm.value;
            this.signupserv.postData(this.user);
            console.log(this.user);
            /* Any API call logic via services goes here */
        }
    }
}
