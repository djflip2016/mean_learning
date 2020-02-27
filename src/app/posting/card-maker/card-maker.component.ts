import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/services/model/post.model';

@Component({
  selector: 'app-card-maker',
  templateUrl: './card-maker.component.html',
  styleUrls: ['./card-maker.component.scss']
})
export class CardMakerComponent implements OnInit {

  enteredTitle = '';
  enteredText = '';

  @Output() postCreated = new EventEmitter();

  constructor() { }

  addPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredText
    };
    this.postCreated.emit(post);
  }

  ngOnInit() {
  }

}
