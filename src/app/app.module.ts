import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { SignupServiceServices } from './signupservice.service';
import { TestserviceService } from './testservice.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupFormReactiveComponent } from './signup-form-reactive/signup-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: 'signup-template',
            component: SignupFormComponent
         } ,
        {
            path: 'reactive-template',
            component: SignupFormReactiveComponent
         }  
      ]),
      ReactiveFormsModule,
      HttpClientModule
  ],
  providers: [AuthService,SignupServiceServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
