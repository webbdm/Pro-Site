import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../blog.service';

import { Post } from "../../post";
import { Router } from '@angular/router';


@Component({
  selector: 'post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.sass']
})
export class PostEditorComponent implements OnInit {
  @Input() post: object;
  @Input() editing: boolean;
  @Output() toggleEdit = new EventEmitter();

  constructor(private _blogService: BlogService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onToggle(): void {
    this.toggleEdit.emit()
  }

  onSave(post: Post): void {
    this._blogService.updatePost(post).subscribe();
    this.onToggle();
  }

  async onDelete(post: Post): Promise<void> {
    this._blogService.deletePost(post).subscribe();

    // call a redirect event to posts list
    this.router.navigate(['/blog'])
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';

}
