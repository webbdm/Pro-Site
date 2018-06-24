import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostEditorComponent } from './pages/blog/post-editor/post-editor.component';
import { PostViewerComponent } from './pages/blog/post-viewer/post-viewer.component';
import { BlogPostComponent } from './pages/blog/blog-post/blog-post.component';




@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    BlogComponent,
    PostEditorComponent,
    PostViewerComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'resume', component: HomeComponent},
      {path: 'contact', component: HomeComponent},
      {path: 'projects', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
