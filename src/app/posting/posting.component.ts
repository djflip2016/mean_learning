import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss']
})
export class PostingComponent implements OnInit {

  @Input() posts = [];

  constructor() { }

  onPostAdded(post) {
    this.posts.push(post);
  }

  ngOnInit() {
  }

}
