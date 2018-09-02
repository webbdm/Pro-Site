import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.sass']
})
export class BlogListComponent implements OnInit {
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
