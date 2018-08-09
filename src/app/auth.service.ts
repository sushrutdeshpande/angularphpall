import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestserviceService } from './testservice.service';

let apiUrl = "http://192.168.0.50/angular4/posts.php";
@Injectable()
export class AuthService {

  constructor(public http : HttpClient,private test:TestserviceService) {
    console.log('Hello AuthService Provider');
  }

  postData(userData) {
    this.http.post('http://localhost/angular4/posts.php', JSON.stringify(userData))
      .subscribe(
        (res:Response) => {
        this.test.greetings(res);
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

    

}
