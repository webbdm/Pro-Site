import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logo_url = 'https://raw.githubusercontent.com/webbdm/React-BioCards/master/images/GWebb%20Logo%20Dark.png'

}
