import { createAction, props } from "@ngrx/store";
import { BlogList, blog, bloginput } from "./BlogModel";


export const LOAD_BLOG = 'Load Blogs [Blog Componenets]';
export const LOAD_BLOG_SUCCESS = 'Load Blogs Success [Blog Componenets]';
export const LOAD_BLOG_FAILURE = 'Load Blogs Failure [Blog Componenets]';

export const CREATE_BLOG = 'Create Blogs [Blog Componenets]';
export const CREATE_BLOG_SUCCESS = 'Create Blogs Success [Blog Componenets]';
export const CREATE_BLOG_FAILURE = 'Create Blogs Failure [Blog Componenets]';

export const createblog = createAction(CREATE_BLOG,props<{Blog : bloginput}>());
export const createblogsuccess = createAction(CREATE_BLOG_SUCCESS,props<{Blog : blog}>());
export const createblogfailure = createAction(CREATE_BLOG_FAILURE,props<{message : string}>());

export const loadblog = createAction(LOAD_BLOG);
export const loadblogsuccess = createAction(LOAD_BLOG_SUCCESS,props<BlogList>());
export const loadblogfailure = createAction(LOAD_BLOG_FAILURE,props<{message : string}>());