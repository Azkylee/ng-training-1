import {Component, OnInit, OnDestroy} from '@angular/core';
import {CourseService} from "./course.service";
import {Course} from "./course";

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
    providers: [CourseService]
})

export class CoursesComponent implements OnInit {

    title: string;
    courses: Array<Course>;
    courseImgUrl: string;
    inputActive: boolean;

    constructor(courseService: CourseService) {
        this.title = 'My super course name';
        this.courses = courseService.getCourses();
        this.courseImgUrl = 'http://www.lorempixel.com/400/400';
        this.inputActive = true;
    }

    ngOnInit() {
    }

    resetInput(inputModelName: string) {
        this[inputModelName] = '';
    }

    onDivClick($event) {
        console.warn('onDivClick');
    }

    onBtnClick($event) {
        $event.stopPropagation();
        console.info('Btn clicked', $event);
        this.inputActive = !this.inputActive;
    }

    onLike($event) {
        console.log('New like', $event)
    }

}
