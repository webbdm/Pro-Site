import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../blog.service';
import { Post } from '../../post';

@Component({
  selector: 'post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.sass']
})
export class PostViewerComponent implements OnInit {
  @Input() post: object;
  @Output() toggleEdit = new EventEmitter();
 
  constructor(
    private route: ActivatedRoute,
    private _blogService: BlogService
  ) { }

  ngOnInit(): void {
  }

  onToggle(): void {
    this.toggleEdit.emit()
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';


}