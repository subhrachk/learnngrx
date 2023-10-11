import { createAction, props } from "@ngrx/store";
import { Blogs } from "./BlogModel";


export const LOAD_BLOG = 'Load Blogs [Blog Componenets]';
export const LOAD_BLOG_SUCCESS = 'Load Blogs Success [Blog Componenets]';
export const LOAD_BLOG_FAILURE = 'Load Blogs Failure [Blog Componenets]';

export const loadblog = createAction(LOAD_BLOG);
export const loadblogsuccess = createAction(LOAD_BLOG,props<Blogs>());
export const loadblogfailure = createAction(LOAD_BLOG,props<{message : string}>());