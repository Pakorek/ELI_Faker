import {Teacher} from "./Teacher";
import {Promotion} from "./Promotion";
import { Speciality } from "./Speciality";

export class Program {
    title!: string;

    subtitle!: string;

    start_date!: string;

    end_date!: string;

    promotions!: Promotion[];

    speciality!: Speciality;
}