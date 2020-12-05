import { User } from './User';
import { Promotion } from "./Promotion";
import { Staff } from "./Staff";
import { Speciality } from "./Speciality";
import { Course } from "./Course";
import { Evaluation } from "./Evaluation";
import {ID, Field, InputType, ObjectType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import { prop } from "@typegoose/typegoose";
import {ObjectID} from "mongodb";

@ObjectType('TeacherType')
@InputType('TeacherInput')
@Entity()
export class Teacher extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field(() => ID)
    @Column()
    schoolId: ObjectID;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @Column()
    speciality: string;

    @Field()
    @Column()
    seniority: number;

    @Field()
    @Column()
    classroom: string;

    constructor(firstName: string, lastName: string, speciality: string, seniority: number, classroom: string, schoolId: ObjectID) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.speciality = speciality;
        this.seniority = seniority;
        this.classroom = classroom;
        this.schoolId = schoolId;
    }

    /*
        @Field()
        @prop()
        promotions?: Promotion[];

        @Field()
        @prop()
        colleagues?: Staff[];

        @Field()
        @prop()
        courses?: Course[];

        @Field()
        @prop()
        evaluations?: Evaluation[];
    */

}