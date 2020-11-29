import {Field, Int, ID, InputType, ObjectType} from "type-graphql";
import { Entity, BaseEntity, ObjectIdColumn, Column } from "typeorm";
import { ObjectID } from "mongodb";
import { prop } from "@typegoose/typegoose";


@ObjectType('UserType')
@InputType('UserInput')
export abstract class User extends BaseEntity {
    @Field()
    @Column()
    @prop()
    firstName!: string;

    @Field()
    @Column()
    @prop()
    lastName!: string;

    /*   birthdate!: string;

       gender!: string;

       email!: string;

       phone!: string;

       adress!: string;

       created_at!: string;
   */
}