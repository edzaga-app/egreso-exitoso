import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'utp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 275;

  constructor() { }

  ngOnInit(): void {
  }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70
      ;
    } else {
      this.contentMargin = 275;
    }
    
  }
  

   

}
