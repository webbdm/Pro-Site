import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.sass']
})
export class PostViewerComponent implements OnInit {
  @Input() post: object;
  @Input() editing: boolean;
  @Output() toggleEdit = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  onToggle(): void {
    this.toggleEdit.emit()
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';

}
