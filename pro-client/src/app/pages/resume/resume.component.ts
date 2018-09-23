import { Component, OnInit } from '@angular/core';


const skills = [
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

    constructor() { }

    ngOnInit() {
    }

    skills = skills;

    img_url = 'https://avatars0.githubusercontent.com/u/13399339?s=460&v=4';

}