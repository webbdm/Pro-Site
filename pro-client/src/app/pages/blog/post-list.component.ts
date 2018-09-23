import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
  providers: [BlogService]
})
export class PostListComponent implements OnInit{
  posts: Post[] = [];
  errorMessage: string;

  constructor(private _blogService: BlogService) {
  }

  fetchData(): void {
    this._blogService.getPosts()
      .subscribe(posts => {
        this.posts = posts
      },
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';

}