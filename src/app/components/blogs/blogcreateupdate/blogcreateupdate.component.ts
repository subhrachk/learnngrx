import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogList } from '../../shared/blogs/BlogModel';
import { createblog } from '../../shared/blogs/BlogActions';

@Component({
  selector: 'app-blogcreateupdate',
  templateUrl: './blogcreateupdate.component.html',
  styleUrls: ['./blogcreateupdate.component.css']
})
export class BlogcreateupdateComponent implements OnInit {

  ngBlog !: FormGroup;

  constructor(private builder : FormBuilder, 
              private dialog : MatDialogRef<BlogcreateupdateComponent>,
              private store : Store<BlogList>) {
    this.ngBlog = builder.group({
      title : builder.control('', [Validators.required]),
      description : builder.control('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  createupdateblog() {
    this.store.dispatch(createblog({Blog : this.ngBlog.value}));
    this.dialog.close();
  }

  closewindow() {
    this.dialog.close();
  }

}
