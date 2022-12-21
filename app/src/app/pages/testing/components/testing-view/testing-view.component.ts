import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'utp-testing-view',
  templateUrl: './testing-view.component.html',
  styleUrls: ['./testing-view.component.scss']
})
export class TestingViewComponent implements OnInit {
  title = 'Testing';

  constructor() { }

  ngOnInit(): void {
  }

}
