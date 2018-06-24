import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {
  @Input() post: object;
  isEditing: boolean;

  constructor() { }

  ngOnInit() {
    this.isEditing = false;
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

}
