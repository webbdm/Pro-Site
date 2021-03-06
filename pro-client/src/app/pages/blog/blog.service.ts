import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Post } from "./post";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class BlogService {
    private _blogUrl = `http://blog.test/posts`;
    private _elixirUrl = `http://localhost:4000/api/posts`;

    constructor(private _http: HttpClient) { }


    getPosts(): Observable<any> {
        return this._http.get(this._elixirUrl)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    getElixirPosts(): Observable<any> {
        return this._http.get(this._elixirUrl)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    getSinglePost(id: Post['id']): Observable<any> {
        return this._http.get(this._elixirUrl + `/${id}`)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    updatePost(post: Post): Observable<any> {
        return this._http.put(this._blogUrl + `/${post.id}`, JSON.stringify(post))
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    deletePost(post: Post): Observable<any> {
        return this._http.delete(this._blogUrl + `/${post.id}`)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}