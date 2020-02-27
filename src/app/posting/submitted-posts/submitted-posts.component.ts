import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/services/model/post.model';

@Component({
  selector: 'app-submitted-posts',
  templateUrl: './submitted-posts.component.html',
  styleUrls: ['./submitted-posts.component.scss']
})
export class SubmittedPostsComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }
  ngOnInit() {
  }

}
