import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/service/post.service';


@Component({
  selector: 'app-card-maker',
  templateUrl: './card-maker.component.html',
  styleUrls: ['./card-maker.component.scss']
})
export class CardMakerComponent implements OnInit {

  titleInput: any;
  contentInput: any;

  constructor(public postsService: PostsService) { }

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

  ngOnInit() {
  }

}
