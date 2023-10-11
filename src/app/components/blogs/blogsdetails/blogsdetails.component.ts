import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogList, blog } from '../../shared/blogs/BlogModel';
import { Store } from '@ngrx/store';
import { loadblog } from '../../shared/blogs/BlogActions';
import { selectBlogs } from '../../shared/blogs/BlogSelector';
import { MatDialog } from '@angular/material/dialog';
import { BlogcreateupdateComponent } from '../blogcreateupdate/blogcreateupdate.component';

@Component({
  selector: 'app-blogsdetails',
  templateUrl: './blogsdetails.component.html',
  styleUrls: ['./blogsdetails.component.css']
})
export class BlogsdetailsComponent implements OnInit {

  blogs$ !: Observable<blog[]>;
  constructor(private store : Store<BlogList>,
              private dialog : MatDialog) { 
    this.blogs$ = store.select(selectBlogs);
  }

  ngOnInit(): void {
    this.store.dispatch(loadblog());
  }

  openNewBlogForm() {
    this.dialog.open(BlogcreateupdateComponent,{width: '40%'});
  }

}
