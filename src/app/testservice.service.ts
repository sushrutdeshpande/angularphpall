import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }

 greetings(name) {
        alert('Hello '+name);
    }
}
