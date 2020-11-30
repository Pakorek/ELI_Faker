import {Teacher} from "./Teacher";
import { Student } from "./Student";
import {ID, Field, ObjectType, InputType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import {ObjectID} from "mongodb";
import {TypeMetaFieldDef} from "graphql";


@ObjectType('PromotionType')
@InputType('PromotionInput')
@Entity()
export class Promotion {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field()
    @Column()
    title: string;

    @Field(() => Teacher)
    @Column()
    teachers: ObjectID[] = [];

    @Field(() => Student)
    @Column()
    students!: ObjectID[];

    //start_date!: string;

    //end_date!: string;

    constructor(title: string) {
        this.title = title
    }
}