import { User } from "./User";
import {Promotion} from "./Promotion";
import {StudentEvaluation} from "./StudentEvaluation";
import {StudentCourse} from "./StudentCourse";
import {Field, ID, ObjectType, InputType} from "type-graphql";
import {BaseEntity, Column, Entity, ObjectIdColumn} from "typeorm";
import {ObjectID} from "mongodb";
import {Teacher} from "./Teacher";

@ObjectType('StudentType')
@InputType('StudentInput')
@Entity()
export class Student extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field(() => ID)
    @Column()
    promotionId: ObjectID;

    constructor(firstName: string, lastName: string, promotionId: ObjectID) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.promotionId = promotionId;
    }


    //classmates!: Student[];

    //courses!: StudentCourse[];
    // or PromotionCourse ? => course for prom, not one student
    // but one course for one student allow 'was_present' or other ...

    //evaluations!: StudentEvaluation[];
}