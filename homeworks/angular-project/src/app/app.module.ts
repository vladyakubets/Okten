import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {UserComponent} from './components/users/user/user.component';
import {PostsComponent} from './components/posts/posts/posts.component';
import {PostComponent} from './components/posts/posts/post/post/post.component';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {
    path: 'posts', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
