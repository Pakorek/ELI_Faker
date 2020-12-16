import {Teacher} from "./Teacher";
import {Promotion} from "./Promotion";
import { Speciality } from "./Speciality";
import {BaseEntity, Column} from "typeorm";
import {Field, InputType, ObjectType} from "type-graphql";

@ObjectType('ProgramType')
@InputType('ProgramInput')
export class Program extends BaseEntity {
    @Field()
    @Column()
    title!: string;

    @Field()
    @Column()
    subtitle!: string;

    @Field()
    @Column()
    start_date!: string; // Date

    @Field()
    @Column()
    end_date!: string;   // Date

    @Field()
    @Column()
    promotions!: Promotion[]; // ObjectID[]

    @Field()
    @Column()
    speciality!: Speciality;
}