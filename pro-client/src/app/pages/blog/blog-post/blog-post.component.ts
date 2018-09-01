import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {
  @Input() post: object;
  @Output() editing: boolean;
  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.editing = false;
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

}
