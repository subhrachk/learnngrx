import { createFeatureSelector, createSelector } from "@ngrx/store";
import { blog } from "./BlogModel";


const getBlogs = createFeatureSelector<{Blogs : blog[]}>('BlogList');

export const selectBlogs = createSelector(getBlogs,(state)=>state.Blogs);