import {Field, Int, ID, InputType, ObjectType} from "type-graphql";
import { Entity, BaseEntity, ObjectIdColumn, Column } from "typeorm";
import { ObjectID } from "mongodb";
import { prop } from "@typegoose/typegoose";


@ObjectType('UserType')
@InputType('UserInput')
@Entity() // ?
export abstract class User extends BaseEntity {
    @Field()
    @Column()
    firstName!: string;

    @Field()
    @Column()
    lastName!: string;

    /*   birthdate!: string;

       gender!: string;

       email!: string;

       phone!: string; // number ?

       adress!: string;

       created_at!: string; // Date
   */
}