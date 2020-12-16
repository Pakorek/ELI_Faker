import {Teacher} from "./Teacher";
import {Course} from "./Course";
import {Promotion} from "./Promotion";
import {Student} from "./Student";
import {Speciality} from "./Speciality";
import {Field, InputType, ObjectType} from "type-graphql";
import {Column, Entity, ObjectIdColumn} from "typeorm";
import { ObjectID } from "mongodb";
import {Content} from "./Content";

@ObjectType('EvaluationType')
@InputType('EvaluationInput')
@Entity()
export class Evaluation extends Content {
    @Field()
    @ObjectIdColumn()
    course!: ObjectID;

    @Field()
    @Column()
    is_official!: boolean;

    @Field()
    @Column()
    max_grade!: number;
}