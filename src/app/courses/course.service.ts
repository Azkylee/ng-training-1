import {Injectable} from "@angular/core";
import {Course} from "./course";

@Injectable()
export class CourseService {

    public getCourses(): Array<Course> {
        return [
            {name: 'course 1', count: 5, isLiked: true},
            {name: 'course 2', count: 15, isLiked: false},
            {name: 'course 2', count: 0, isLiked: false}
        ].map(course => new Course(course.name, course.count, course.isLiked));
    }

}