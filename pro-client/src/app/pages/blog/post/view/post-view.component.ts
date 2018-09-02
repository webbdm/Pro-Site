import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';


@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.sass'],
  providers: [BlogService]
})
export class PostViewComponent implements OnInit{

  ngOnInit(){

  }
}