import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_BLOG, createblog, loadblogsuccess,createblogsuccess } from "./BlogActions";
import { EMPTY, catchError, exhaustMap, map, switchMap } from "rxjs";
import { MasterService } from '../global/master.service';

@Injectable({providedIn: 'root'})

export class BlogEffects {

    constructor(private action$ : Actions, private masterService : MasterService) {}

    _blogselect = createEffect(()=>
    this.action$.pipe(
        ofType(LOAD_BLOG),
        exhaustMap((action)=> {
            return this.masterService.getallBlogs.pipe(
                map(blogs => {
                    console.log('Herer');
                    return loadblogsuccess({Blogs : blogs})
                }),
                catchError((err: Error) => EMPTY)
            )
        })
    ));

    _blogcreate = createEffect(()=>
        this.action$.pipe(
            ofType(createblog),
            switchMap((action) => {
                console.log('action', action);
                return this.masterService.createBlog(action.Blog).pipe(
                    map((data) => {
                        console.log('data', data);
                        return createblogsuccess({Blog : data});
                    }),
                    catchError((err: Error) => EMPTY)
                    )
                })
        ));

}