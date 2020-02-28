import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';




@Injectable({providedIn: 'root'})
export class PostsService {
 private posts: Post[] = [];
 private postsUpdate = new Subject<Post[]>();

 constructor(private http: HttpClient) {}

 getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:4000/api/posts').subscribe( (postData) => {
    this.posts = postData.posts;
    this.postsUpdate.next([...this.posts]);
    });
 }

 getUpdatedPost() {
     return this.postsUpdate.asObservable();
 }

 addPost(title: string, content: string) {
    const post: Post = {
        id: null,
        title,
        content
    };
    this.posts.push(post);
    this.postsUpdate.next([...this.posts]);
 }
}
