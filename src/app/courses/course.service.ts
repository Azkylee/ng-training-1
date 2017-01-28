import {Injectable} from "@angular/core";
import {Course} from "./course";

@Injectable()
export class CourseService {

    public getCourses() : Array<Course> {
        return ['course 1', 'course 2', 'course 3'].map(course => new Course(course));
    }

}