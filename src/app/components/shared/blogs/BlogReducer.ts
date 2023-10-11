import { createReducer, on } from "@ngrx/store";
import { bloginitialstate } from "./BlogState";
import { loadblogsuccess } from "./BlogActions";


export const blogreducer = createReducer(
    bloginitialstate,
    on(loadblogsuccess,(state,action)=>{
        return {
            Blogs : [...action.Blogs]
        }
    })
);