import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LOAD_BLOG, loadblogsuccess } from "./BlogActions";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { MasterService } from '../global/master.service';

@Injectable({providedIn: 'root'})

export class BlogEffects {

    constructor(private action$ : Actions, private masterService : MasterService) {}

    _blogselect = createEffect(()=>
    this.action$.pipe(
        ofType(LOAD_BLOG),
        exhaustMap(()=> {
            return this.masterService.getallBlogs.pipe(
                map(blogs => {
                    console.log('Herer');
                    return loadblogsuccess({Blogs : blogs})
                }),
                catchError((err: Error) => EMPTY)
            )
        })
    ));

}