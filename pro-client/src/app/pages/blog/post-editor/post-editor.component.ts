import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.sass']
})
export class PostEditorComponent implements OnInit {
  @Input() post: object;
  @Input() editing: boolean;
  @Output() toggleEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle(): void {
    this.toggleEdit.emit()
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';

}
