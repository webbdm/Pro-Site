import { Component } from '@angular/core';
import { BlogService } from './pages/blog/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [BlogService]
})
export class AppComponent {
  title = 'Pro Client';
}
