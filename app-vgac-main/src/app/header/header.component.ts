import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isDisplayed: boolean = false;

  displayMenu(): void {
    if(this.isDisplayed === false ) {
      this.isDisplayed = true
    } else {
      this.isDisplayed = false
    }
  }
}
