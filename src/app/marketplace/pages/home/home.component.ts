import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  componentReady: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.componentReady = true;
    }, 1000);
  }
}
