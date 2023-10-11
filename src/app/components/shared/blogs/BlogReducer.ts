import { createReducer, on } from "@ngrx/store";
import { bloginitialstate } from "./BlogState";
import { loadblogsuccess , createblogsuccess } from "./BlogActions";


export const blogreducer = createReducer(
    bloginitialstate,
    on(loadblogsuccess,(state,action)=>{
        return {
            Blogs : [...action.Blogs]
        }
    }),
    on(createblogsuccess,(state,action)=>{
        return {
            Blogs : [...state.Blogs,action.Blog]
        }
    })
);