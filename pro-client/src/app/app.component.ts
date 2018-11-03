import { Component } from '@angular/core';
import { BlogService } from './pages/blog/blog.service';
import { ResumeService } from './pages/resume/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [BlogService, ResumeService]
})
export class AppComponent {
  title = 'Pro Client';
}
