import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Blogs } from "../blogs/BlogModel";

@Injectable({providedIn : 'root'})

export class MasterService {

    constructor(private http : HttpClient) {}
    getallBlogs = this.http.get<Blogs>('http://localhost:3000/blogs');
}