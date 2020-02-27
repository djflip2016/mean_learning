import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submitted-posts',
  templateUrl: './submitted-posts.component.html',
  styleUrls: ['./submitted-posts.component.scss']
})
export class SubmittedPostsComponent implements OnInit {

  @Input() storedPosts = [];

  constructor() { }
  ngOnInit() {
  }

}
