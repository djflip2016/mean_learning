import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material imports
import { MatSidenavModule,
         MatInputModule,
         MatFormFieldModule,
         MatButtonModule,
         MAT_FORM_FIELD_DEFAULT_OPTIONS,
         MatToolbarModule,
         MatCardModule,
         MatDividerModule
        } from '@angular/material';
import { PostingComponent } from './posting/posting.component';
import { SubmittedPostsComponent } from './posting/submitted-posts/submitted-posts.component';
import { CardMakerComponent } from './posting/card-maker/card-maker.component';


@NgModule({
  declarations: [
    AppComponent,
    PostingComponent,
    SubmittedPostsComponent,
    CardMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
