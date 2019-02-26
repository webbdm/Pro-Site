import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Post } from './post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: string;

  constructor(private _blogService: BlogService) {
  }

  fetchData(): void {
    this._blogService.getPosts()
      .subscribe(posts => {
        this.posts = posts.data
      },
        error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';


}
