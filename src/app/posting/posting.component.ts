import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/services/model/post.model';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {

  storedPosts: Post[] = [];

  constructor() { }

  onPostAdded(post) {
    this.storedPosts.push(post);
  }

  ngOnInit() {
  }

}
