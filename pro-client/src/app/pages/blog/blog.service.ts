import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IPost } from "./post";
import { tap, catchError } from "rxjs/operators";

@Injectable()

export class BlogService {
    private _blogUrl = `http://blog.test/posts`;

    constructor(private _http: HttpClient) { }

    getPosts(): Observable<IPost[]> {
        return this._http.get<IPost[]>(this._blogUrl)
            .pipe(tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError))
    }

    getSinglePost(): Observable<IPost>{
        return;
    }

    updatePost(): Observable<IPost>{
        console.log("update");
        return;
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}