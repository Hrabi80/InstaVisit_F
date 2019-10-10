import { Component, OnInit } from '@angular/core';
// Mock localStorage when it is not allowed
let localStorage;
try {
  localStorage = window.localStorage;
} catch (error) {
  localStorage = {
    getItem: key => undefined,
    setItem: () => {}
  };
}
@Component({
  selector: 'app-vt360',
  templateUrl: './vt360.component.html',
  styleUrls: ['./vt360.component.css']
})


export class VT360Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
