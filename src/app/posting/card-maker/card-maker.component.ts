import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/services/model/post.model';


@Component({
  selector: 'app-card-maker',
  templateUrl: './card-maker.component.html',
  styleUrls: ['./card-maker.component.scss']
})
export class CardMakerComponent implements OnInit {

  @Output() postCreated = new EventEmitter();

  constructor() { }

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }

  ngOnInit() {
  }

}
