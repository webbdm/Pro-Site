import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.sass']
})
export class PostViewerComponent implements OnInit {
  @Input() post: object;

  constructor() { 
  }

  ngOnInit() {
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';

}
