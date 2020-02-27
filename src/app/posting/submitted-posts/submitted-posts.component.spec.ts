import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedPostsComponent } from './submitted-posts.component';

describe('SubmittedPostsComponent', () => {
  let component: SubmittedPostsComponent;
  let fixture: ComponentFixture<SubmittedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
