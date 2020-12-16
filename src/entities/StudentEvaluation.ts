import {Student} from "./Student";
import {Evaluation} from "./Evaluation";
import {ObjectID} from "mongodb";
import {Field, ID, ObjectType} from "type-graphql";
import {Column, Entity, ObjectIdColumn} from "typeorm";

@ObjectType('StudentEvaluationType')
@Entity()
export class StudentEvaluation {
    @Field(() => ID)
    @ObjectIdColumn()
    student!: ObjectID;

    @Field(() => ID)
    @ObjectIdColumn()
    evaluation!: ObjectID;

    @Field()
    @Column()
    was_present!: boolean;

    @Field()
    @Column()
    grade!: number;
}