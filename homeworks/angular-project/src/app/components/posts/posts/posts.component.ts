import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {Post} from "../../../models/Posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts: Post[];
  @Input()
  userID:number;
  constructor( private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostsOfUser(this.userID).subscribe(value => this.posts = value);
  }

}
