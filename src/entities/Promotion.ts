import {Teacher} from "./Teacher";
import { Student } from "./Student";
import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";

@ObjectType('PromotionType')
@InputType('PromotionInput')
@Entity()
export class Promotion {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field(() => ID)
    @Column()
    schoolId: ObjectID;

    @Field()
    @Column()
    title: string;

    @Field(() => Teacher)
    @Column()
    teachers: ObjectID[] = [];

    @Field(() => Student)
    @Column()
    students!: ObjectID[];

    //start_date!: Date;

    //end_date!: Date;

    constructor(title: string, schoolId: ObjectID) {
        this.title = title;
        this.schoolId = schoolId;
    }
}