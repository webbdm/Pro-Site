import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  image_url = 'https://avatars3.githubusercontent.com/u/13399339?s=400&u=e68da19dc1c8782f445ffaacbb5a3a55074e185f&v=4';

}
