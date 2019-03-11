import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import { Resume } from './resume';
import { Jobs } from './jobs';



const skills1 = [
    {
        "name": "react",
        "path": "https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent-300x300.png"
    },
    {
        "name": "angular",
        "path": "https://angular.io/assets/images/logos/angular/angular.svg"
    },
    {
        "name": "node",
        "path": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"
    },
    {
        "name": "laravel",
        "path": "https://seeklogo.com/images/L/laravel-framework-logo-C10176EC8C-seeklogo.com.png"
    }
]


@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
    resume: Resume[] = []; 
    jobs: Jobs[] = [];
    errorMessage: string;


    constructor(private _resumeService: ResumeService) { }

    fetchData(): void {
        this._resumeService.getSingleResume(this.user_id)
            .subscribe(resume => {
                this.resume = resume;
            },
                error => this.errorMessage = <any>error);
    }


    fetchJobs(): void {
        this._resumeService.getJobs()
            .subscribe(jobs => {
                this.jobs = jobs.data;
            },
                error => this.errorMessage = <any>error);

    }
    ngOnInit(): void {
       // this.fetchData();
       this.fetchJobs();
    }

    skills = skills1;

    img_url = 'https://avatars0.githubusercontent.com/u/13399339?s=460&v=4';

    user_id = 1; // Hardcoded from the Resume ID until users & auth are added

}