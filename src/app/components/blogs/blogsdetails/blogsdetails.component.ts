import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogList, blog } from '../../shared/blogs/BlogModel';
import { Store } from '@ngrx/store';
import { loadblog } from '../../shared/blogs/BlogActions';
import { selectBlogs } from '../../shared/blogs/BlogSelector';

@Component({
  selector: 'app-blogsdetails',
  templateUrl: './blogsdetails.component.html',
  styleUrls: ['./blogsdetails.component.css']
})
export class BlogsdetailsComponent implements OnInit {

  blogs$ !: Observable<blog[]>;
  constructor(private store : Store<BlogList>) { 
    this.blogs$ = store.select(selectBlogs);
  }

  ngOnInit(): void {
    this.store.dispatch(loadblog());
  }

}
