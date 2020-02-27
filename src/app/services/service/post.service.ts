import { Post } from '../model/post.model';

export class PostsService {
 private posts: Post[] = [];

 getPosts() {
     return this.posts;
 }
}
