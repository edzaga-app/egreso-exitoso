import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'utp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
 @Input() toggle!: MatSidenav;
 @Output() emit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
