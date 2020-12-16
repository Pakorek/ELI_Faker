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

@ObjectType('TeacherSpecialitiesType')
@InputType('TeacherSpecialitiesInput')
@Entity()
export class TeacherSpecialities extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    teacherId!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    specialityId!: ObjectID;
}