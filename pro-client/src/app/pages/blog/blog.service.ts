import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "./post";
import { tap, catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BlogService {
    private _blogUrl = `http://blog.test/posts`;

    constructor(private _http: HttpClient) { }



    getPosts(): Observable<any> {
        return this._http.get(this._blogUrl)
            .pipe(tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError))
    }

    getSinglePost(): Observable<any> {
        return;
    }

    updatePost(post: Post): Observable<any> {
        return this._http.put(this._blogUrl + `/${post.id}`, JSON.stringify(post), httpOptions)
            .pipe(tap(data => console.log(`updated post id=${post.id}`)),
                catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}