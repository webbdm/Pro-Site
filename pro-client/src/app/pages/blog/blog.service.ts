import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
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
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    getSinglePost(id: Post['id']): Observable<any> {
        return this._http.get(this._blogUrl + `/${id}`, httpOptions)
            .pipe(tap(null),
                catchError(this.handleError))
    }

    updatePost(post: Post): Observable<any> {
        return this._http.put(this._blogUrl + `/${post.id}`, JSON.stringify(post), httpOptions)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    deletePost(post: Post): Observable<any> {
        return this._http.delete(this._blogUrl + `/${post.id}`, httpOptions)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}