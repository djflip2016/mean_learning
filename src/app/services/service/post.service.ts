import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../model/post.model';


@Injectable({providedIn: 'root'})
export class PostsService {
 private posts: Post[] = [];
 private postsUpdate = new Subject<Post[]>();

 getPosts() {
     return [...this.posts];
 }

 getUpdatedPost() {
     return this.postsUpdate.asObservable();
 }

 addPost(title: string, content: string) {
    const post: Post = {
        title,
        content
    };
    this.posts.push(post);
    this.postsUpdate.next([...this.posts]);
 }
}
