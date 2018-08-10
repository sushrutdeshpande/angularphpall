import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestservicesServices {

  constructor() { }

 greetings(name) {
        alert('Hello '+name);
    }
}
