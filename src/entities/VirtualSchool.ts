import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";
import { Floor } from "./Floor";

@ObjectType('PromotionType')
@InputType('PromotionInput')
@Entity()
export class VirtualSchool extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    schoolId: ObjectID;

    @Field()
    @Column()
    floors: Floor[] = []

    constructor(schoolId: ObjectID, floor0: Floor, floor1: Floor) {
        super();
        this.schoolId = schoolId;
    }
}