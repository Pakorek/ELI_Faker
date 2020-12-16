import {Teacher} from "./Teacher";
import {Course} from "./Course";
import {Promotion} from "./Promotion";
import {Student} from "./Student";
import {Speciality} from "./Speciality";
import {Field, InputType, ObjectType} from "type-graphql";
import {BaseEntity, Column, ObjectIdColumn} from "typeorm";
import { ObjectID } from "mongodb";

@ObjectType('UserType')
@InputType('UserInput')
// Entity ?
export abstract class Evaluation extends BaseEntity{
    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    subtitle!: string;

    @Field()
    @Column()
    content!: string;

    @Field()
    @Column()
    created_at!: string; // Date

    @Field()
    @ObjectIdColumn()
    teacher!: ObjectID;

    @Field()
    @ObjectIdColumn()
    course!: ObjectID;

    @Field()
    @Column()
    is_official!: boolean;

    @Field()
    @Column()
    max_grade!: number;

    @Field()
    @Column()
    speciality!: Speciality;
}