import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";
import { Resume } from "./resume";
import { tap, catchError } from "rxjs/operators";

// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class ResumeService {
    private _resumeUrl = `http://blog.test/resumes`;
    private _jobsUrl = `http://localhost:4000/api/jobs`;
    private _skillsetUrl = `http://blog.test/skillsets`;

    constructor(private _http: HttpClient) { }


    getResumes(): Observable<any> {
        return this._http.get(this._resumeUrl)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    getSingleResume(id: Resume['user_id']): Observable<any> {
        return this._http.get(this._resumeUrl + `/${id}`)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    updateResume(resume: Resume): Observable<any> {
        return this._http.put(this._resumeUrl + `/${resume.id}`, JSON.stringify(resume))
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    deleteResume(resume: Resume): Observable<any> {
        return this._http.delete(this._resumeUrl + `/${resume.id}`)
            .pipe(tap(data => null),
                catchError(this.handleError))
    }

    getJobs(): Observable<any> {
        return this._http.get(this._jobsUrl).pipe(tap(data => console.log(data)), catchError(this.handleError))
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

}