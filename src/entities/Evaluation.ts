import {Teacher} from "./Teacher";
import {Course} from "./Course";
import {Promotion} from "./Promotion";
import {Student} from "./Student";
import {Speciality} from "./Speciality";

export abstract class Evaluation {
    title!: string;

    subtitle!: string;

    content!: string;

    created_at!: string;

    teacher!: Teacher;

    course!: Course;

    // promotion!: Promotion;
    students!: Student[];

    is_official!: boolean;

    max_grade!: number;

    speciality!: Speciality;
}