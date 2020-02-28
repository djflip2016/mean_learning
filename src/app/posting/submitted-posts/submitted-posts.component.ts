import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/services/model/post.model';
import { PostsService } from 'src/app/services/service/post.service';

@Component({
  selector: 'app-submitted-posts',
  templateUrl: './submitted-posts.component.html',
  styleUrls: ['./submitted-posts.component.scss']
})
export class SubmittedPostsComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(public postsService: PostsService) {}


  ngOnInit() {
    this.postsService.getPosts();
    this.postsService.getUpdatedPost().subscribe( (posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }


}
