import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Post } from '../post';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {
  @Output() editing: boolean;
  @Output() onToggle = new EventEmitter();
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private _blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.editing = false;

    let id = this.route.snapshot.params['post'];
    this._blogService.getSinglePost(id).subscribe(post => this.post = post);
    
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  //temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';


}
