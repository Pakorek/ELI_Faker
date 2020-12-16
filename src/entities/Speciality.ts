// export type Speciality = 'Français' | 'Mathématiques' | 'Anglais'; //...

import { User } from './User';
import { Promotion } from "./Promotion";
import { Staff } from "./Staff";
import { Course } from "./Course";
import { Evaluation } from "./Evaluation";
import {ID, Field, InputType, ObjectType} from "type-graphql";
import {Entity, ObjectIdColumn, Column, BaseEntity} from "typeorm";
import { prop } from "@typegoose/typegoose";
import {ObjectID} from "mongodb";

@ObjectType('SpecialityType')
@InputType('SpecialityInput')
@Entity()
export class Speciality extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;

    @Field(() => ID)
    @Column()
    title!: string;
}