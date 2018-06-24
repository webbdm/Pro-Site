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

}
