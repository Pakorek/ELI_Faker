import {Student} from "./Student";
import {Evaluation} from "./Evaluation";

export class StudentEvaluation {
    student!: Student;

    evaluation!: Evaluation;

    was_present!: boolean;

    grade!: number;
}