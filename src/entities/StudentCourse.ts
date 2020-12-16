import {Student} from "./Student";
import {Course} from "./Course";
import {ObjectID} from "mongodb";
import {Field, ID, ObjectType} from "type-graphql";
import {Column, Entity, ObjectIdColumn} from "typeorm";

@ObjectType('StudentCourseType')
@Entity()
export class StudentCourse {
    @Field(() => ID)
    @ObjectIdColumn()
    student!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    course!: ObjectID;

    @Field()
    @Column()
    was_present!: boolean;
}