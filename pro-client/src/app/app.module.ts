import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostEditorComponent } from './pages/blog/post/edit/post-editor.component';
import { PostListItemComponent } from './pages/blog/post/post-list-item.component';
import { BlogPostComponent } from './pages/blog/post/blog-post.component';
import {ResumeComponent} from './pages/resume/resume.component';
import { PostListComponent } from './pages/blog/post-list.component';
import { PostViewerComponent } from './pages/blog/post/view/post-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    BlogComponent,
    PostEditorComponent,
    PostViewerComponent,
    PostListItemComponent,
    PostListComponent,
    BlogPostComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'blog', component: BlogComponent, 
        children: [{ path: '', component: PostListComponent, pathMatch: 'full' },
                   { path: ':post', component: BlogPostComponent }]
      },
      { path: 'resume', component: ResumeComponent },
      { path: 'contact', component: HomeComponent },
      { path: 'projects', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
