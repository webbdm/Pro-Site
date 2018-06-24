import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { IPost } from './post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  posts: IPost[] = [];
  errorMessage: string;

  constructor(private _blogService: BlogService) {
  }

  ngOnInit(): void {
    this._blogService.getPosts()
      .subscribe(posts => {
        this.posts = posts
      },
        error => this.errorMessage = <any>error);
  }

  temp_image = 'https://raw.githubusercontent.com/nss-evening-cohort-05/challenge-static-web-html-webbdm/master/images/gsmbackground.png';
  isEditing = false;

}
