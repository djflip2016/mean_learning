import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostingComponent } from './posting/posting.component';

const routes: Routes = [
  {path: '', component: PostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
