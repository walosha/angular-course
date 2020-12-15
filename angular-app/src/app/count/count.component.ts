import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  count = 0;
  constructor() {}

  ngOnInit(): void {}

  decrement() {
    console.log('decrease');
    if (this.count > 0) {
      this.count -= 1;
    }
  }
  increment() {
    this.count += 1;
  }
}
